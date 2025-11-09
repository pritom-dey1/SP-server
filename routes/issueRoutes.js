import express from "express"
import { getAllIssues, getSingleIssue, createIssue, updateIssue, deleteIssue ,getLatestIssues } from "../controllers/issueController.js"
import { verifyToken } from "../middleware/verifyToken.js"
const router = express.Router()
router.get("/latest", getLatestIssues)
router.get("/", getAllIssues)
router.get("/:id",verifyToken, getSingleIssue)
router.post("/", createIssue)
router.patch("/:id", updateIssue)
router.delete("/:id", deleteIssue)

export default router
