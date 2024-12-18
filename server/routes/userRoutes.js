import express from "express"
import { forgotPassword, loginUser, myProfile, register, resetPassword, verifyUser } from "../controllers/userController.js";
import { isAuth } from "../middleware/isAuth.js";
import { checkout, getMyCourses, paymentVerification } from "../controllers/courseController.js";


const router = express.Router();

router.post('/register', register);
router.post('/verify', verifyUser);
router.post('/login', loginUser);
router.get("/me", isAuth, myProfile)
router.get("/mycourse", isAuth, getMyCourses);
// check out route
router.post("/course/checkout/:id", isAuth, checkout);
router.post("/verification/:id", isAuth, paymentVerification);
router.post("/forgotpassword", forgotPassword)
router.post("/resetpassword", resetPassword)


export default router;


