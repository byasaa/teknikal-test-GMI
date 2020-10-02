const jwt = require("jsonwebtoken");
const config = require("../configs/");
const { response } = require("../helpers/response");
const { sendOtp } = require("../helpers/nodemailer");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const authModel = require("../models/auth");
const otpGen = require("otp-generator");

module.exports = {
  register: async (req, res) => {
    try {
      let otpCode = otpGen.generate(6, {
        upperCase: false,
        alphabets: false,
        specialChars: false,
      });
      const setData = req.body;
      setData.is_active = 0;
      const salt = genSaltSync(10);
      setData.password = hashSync(setData.password, salt);
      const result = await authModel.register(setData);
      const setOtp = {
        email: result.email,
        code: otpCode,
      };
      await authModel.insertOtp(setOtp);
      await sendOtp(setOtp);
      return response(res, "success", 200, "Active your account now");
    } catch (error) {
      console.log(error);
      return response(res, "fail", 200, "Something wrong");
    }
  },
  login: async (req, res) => {
    try {
      const setData = req.body;
      const result = await authModel.getByEmail(setData.email);
      if (result[0]) {
        const user = result[0];
        const checkPassword = compareSync(setData.password, user.password);
        if (checkPassword) {
          const token = jwt.sign({ user: user }, "secret", {
            expiresIn: "1h",
          });
          result[0].token = token;
        }
        return response(res, "success", 200, result);
      }
      return response(res, "fail", 404, "null");
    } catch (error) {
      return response(res, "fail", 200, "Something wrong");
    }
  },
  activation: async (req, res) => {
    try {
      const setData = req.body;
      const result = await authModel.getCode(setData.email);
      if (result[0]) {
        if (result[0].code == setData.code) {
          await authModel.updateStatus(setData.email);
          return response(res, "success", 200, result);
        } else {
          return response(res, "fail", 200, "Code Wrong!");
        }
      }
      return response(res, "fail", 404, null);
    } catch (error) {
      console.log(error);
      return response(res, "fail", 200, "Something wrong");
    }
  },
};
