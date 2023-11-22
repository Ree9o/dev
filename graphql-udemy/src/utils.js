const jwt = require("jsonwebtoken");

APP_SECRET = "Graphql_awsome";

function getTokenPayload(token) {
  return jwt.verify(token, APP_SECRET);
}

function getUserId(req, authToken) {
  if (req) {
    //hederの確認
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace("Bearer", "");
      if (!token) {
        throw new Error("token undefind");
      }
      // tokenの復号する
      const { userId } = getTokenPayload(token);
      return userId;
    }
  } else if (authToken) {
    const { userId } = getTokenPayload(token);
    return userId;
  }
  throw new Error("権限がありません");
}
module.exports = {
  APP_SECRET,
  getUserId,
};
