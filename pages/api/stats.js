import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";
import Job from "../../models/Job";

export default async function handler(req, res) {
  await dbConnect("MDI-Connect");

  const users = await User.countDocuments();
  const sectors = await Job.aggregate([
    { $group: { _id: "$sector", count: { $sum: 1 } } }
  ]);

  const formattedSectors = {};
  sectors.forEach((s) => (formattedSectors[s._id] = s.count));

  res.status(200).json({ users, sectors: formattedSectors });
}

