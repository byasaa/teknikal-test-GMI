const connection = require("../helpers/mysql");

module.exports = {
  register: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO users SET ?", setData, (error, result) => {
        if (error) {
          reject(error);
        }
        const newData = {
          id: result.insertId,
          ...setData,
        };
        resolve(newData);
      });
    });
  },
  getByEmail: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM users WHERE email = ?",
        email,
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
  },
  insertOtp: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO code SET ?", data, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  },
  getCode: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM code WHERE email = ?",
        email,
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
  },
  updateStatus: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE users SET is_active = 1 WHERE email = ?",
        email,
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
  },
};
