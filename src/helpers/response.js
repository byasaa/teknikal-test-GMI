module.exports = {
  response: (res, status, statusCode, data) => {
    const result = {};

    result.data = data || "data null";
    result.status = status === "success" ? true : false;
    result.statusCode = statusCode || 200;
    return res.status(result.statusCode).json({
      status: result.status,
      data: result.data,
    });
  },
};
