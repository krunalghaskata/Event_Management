const message = {
  LOGIN_SUCCESS: "user login successfully",
  REQUIRED_TOKEN: "A token is required for authentication!",
  TOKEN_EXPIRES: "Token expired, please login!",
  REQUIRE_LOGIN: "Please Login!",
  SIGNUP: "Please, signup first!",
  LOGIN_SUCCESS: "User login successfully!",
  INVALID_PASSWORD: "Invalid password, please try again!",
  USER_NOT_FOUND: "User not found!",
  USER_UPDATED: "User updated successfully!",
  REQUIRED_INPUT: "Input is required!",
  USER_EXIST: "User already exists, please login!",
  LOG_OUT: "user log out successfully",
};

const getMessage = (key) => {
  if (message[key]) {
    return message[key];
  }
  return "message key not found!!!";
};

module.exports = getMessage;
