const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();

const userInfoValidation = (action) => {
  switch (action) {
    case "register":
      return [
        body("firstName", "First name field missing")
          .exists()
          .isLength({ min: 1 }),
        body("lastName", "Last name field missing")
          .exists()
          .isLength({ min: 1 }),
        body("email", "Invalid Email").exists().isEmail(),
        body("password", "Password must be at least 6 characters")
          .exists()
          .isLength({ min: 6 }),
        body("confirmPassword", "Password must be at least 6 characters")
          .exists()
          .isLength({ min: 6 })
          .custom((passwordConf, { req }) => {
            if (passwordConf !== req.body.password) {
              throw new Error("Password Confirmation does not match password");
            }
            return true;
          }),
      ];
    default:
      break;
  }
};

router.post("/register", userInfoValidation("register"), (req, res) => {
  const user = { name: "Marisi" };
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(401).send(errors.array());
  }
  res.send(user);
});

export default router;
