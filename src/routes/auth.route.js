const express = require("express");
const router = express.Router();
// Your default route here
const { signUp, login, currentUser, logOut, forgotPassword, resetPassword, refreshToken } = require("../controllers/auth.ctrl")
const authenticate = require("../middlewares/authenticate.middleware")
router
    .post("/signUp", signUp)
    .post("/login", login)
    .post("/forgot-password", forgotPassword)
    .post("/reset-password", resetPassword)
    .post("/refresh-token", refreshToken)
    .get("/me", authenticate, currentUser)
    .post("/logout", authenticate, logOut)
module.exports = router;
