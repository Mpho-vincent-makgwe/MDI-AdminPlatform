import connectDB from "../../utils/connectDB";
import User from "../../models/User";

export default async function handler(req, res) {
  await connectDB();

  const users = await User.countDocuments();
  const sectors = await User.aggregate([
    { $group: { _id: "$sector", count: { $sum: 1 } } }
  ]);

  const formattedSectors = {};
  sectors.forEach((s) => (formattedSectors[s._id] = s.count));

  res.status(200).json({ users, sectors: formattedSectors });
}
