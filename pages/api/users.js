import connectDB from "../../utils/connectDB";
import User from "../../models/User";

export default async function handler(req, res) {
  await connectDB();

  const users = await User.find({}, "name email sector");
  res.status(200).json(users);
}
