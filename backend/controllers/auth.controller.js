//authcontroller
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/auth.model");
async function signup(req, res) {
  try {
    const { firstName, lastName, email, password, confirmPassword, image, roles } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      res.send({ message: "Email id is already registered", alert: false });
    } else {
      const hashedPassword = bcrypt.hashSync(password);
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        confirmPassword,
        image,
       // roles: roles || [ROLES.USER] 
      });
      await newUser.save();
      res.send({ message: "Successfully Sign Up...!", alert: true });
    }
  } catch (error) {
    console.error("Error occurred during signup:", error);
    res
      .status(500)
      .send({ message: "An error occurred during signup", alert: false });
  }
}


async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (user) {
      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (isPasswordValid) {
        // Generate JWT token
        const token = jwt.sign(
          { _id: user._id, email: user.email },
          "your_secret_key",
          { expiresIn: "1h" }
        );

        const userInfo = {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          image: user.image,
          roles: user.roles,
        };

        // return {token, userInfo}

        res.send({
          token: token,
          userInfo: userInfo, // Send token along with user data
        });
      } else {
        res.send({
          message: "Invalid password",
          alert: false,
        });
      }
    } else {
      res.send({
        message: "Email is not registered, please sign up",
        alert: false,
      });
    }
  } catch (error) {
    console.error("Error occurred during login:", error);
    res.status(500).send({
      message: "An error occurred during login",
      alert: false,
    });
  }
}

module.exports = { signup, login };
