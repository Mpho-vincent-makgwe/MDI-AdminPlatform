import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
  try {
    await dbConnect("MDI-Connect");
    console.log("Connected to database")
    const users = await User.find({}, "name email sector");
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
