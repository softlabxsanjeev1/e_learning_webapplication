import express from "express";
import { getAllCourses, getAllLecture, getLecture, getSingleCourse } from "../controllers/courseController.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.get("/all", getAllCourses);
router.get("/:id", getSingleCourse);
router.get("/lectures/:id", isAuth, getAllLecture);
router.get("/lecture/:id", isAuth, getLecture);


export default router;