import express from "express"
const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const db = req.app.locals.db
    const issuesCollection = db.collection("issues")

    const totalIssues = await issuesCollection.countDocuments()
    const resolved = await issuesCollection.countDocuments({ status: "ended" })
    const pending = await issuesCollection.countDocuments({ status: "ongoing" })

    const usersCollection = db.collection("users")
    const totalUsers = await usersCollection.countDocuments().catch(() => 0)

    res.status(200).json({
      totalUsers,
      totalIssues,
      resolved,
      pending
    })
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message })
  }
})

export default router
