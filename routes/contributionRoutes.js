import express from "express"
import { addContribution, getContributionsByIssue, getContributionsByUser } from "../controllers/contributionController.js"
const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const db = req.app.locals.db
    const data = await db.collection("contributions").find().toArray()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

router.post("/", addContribution)
router.get("/issue/:issueId", getContributionsByIssue)
router.get("/user/:email", getContributionsByUser)

export default router
