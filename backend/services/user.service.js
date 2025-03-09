const userModel = require("../models/user.models");

module.exports.createUser = async (userData) => {
  const { fullname, email, password } = userData;

  // Ensure `fullname` exists before accessing properties
  if (!fullname || typeof fullname !== "object") {
    throw new Error("Invalid fullname format");
  }

  if (!fullname || !fullname.firstname || !email || !password) {
    throw new Error("All fields are required");
  }

  // ✅ Check if email already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new Error("Email already exists. Please use a different email.");
  }
  const user = await userModel.create({
    fullname: {
      firstname: fullname.firstname,
      lastname: fullname.lastname || "", // Avoid undefined lastname
    },
    email,
    password,
  });

  return user;
};
