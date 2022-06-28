const usersRouter = require("express").Router();
const { getUserByEmail } = require("../db/models/users");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { requireUser } = require("./utils");
const bcrypt = require("bcrypt");

usersRouter.use("/", (req, res, next) => {
  console.log("Request to /users is being made.");
  next();
});

usersRouter.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    console.log("&&&&&&&&&&&&USER: ", user);

    if (user && bcrypt.compareSync(password, user.password)) {
      console.log("LOGIN SUCCESS");
      const token = jwt.sign(
        { id: user.id, email: email },
        process.env.JWT_SECRET,
        { expiresIn: "1w" }
      );
      res.send({
        message: `Welcome Back!`,
        token: token,
      });
    } else {
      console.log("LOGIN FAILED");
      res.status(409);
      next({
        name: "Bad Login/Password",
        message: "Login error: you must supply a valid login/password",
      });
    }
  } catch ({ name, message }) {
    res.status(404);
    next({ name, message });
  }
});

module.exports = usersRouter;
