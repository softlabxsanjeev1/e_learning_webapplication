import express from "express";
import { isAdmin, isAuth } from "../middleware/isAuth.js"
import { addLectures, createCourse, deleteCourse, deleteLecture, getAllStats, getAllUser, updateRole } from "../controllers/adminControler.js";
import { uploadFiles } from "../middleware/multer.js"

const router = express.Router();


router.post('/new', isAuth, isAdmin, uploadFiles, createCourse);
router.post("/:id", isAuth, isAdmin, uploadFiles, addLectures);
router.delete("/course/:id", isAuth, isAdmin, deleteCourse);
router.delete("/lecture/:id", isAuth, isAdmin, deleteLecture);
router.get('/stats', isAuth, isAdmin, getAllStats);
router.get("/users", isAuth, isAdmin, getAllUser);
router.put("/user/:id", isAuth, isAdmin, updateRole);



export default router;