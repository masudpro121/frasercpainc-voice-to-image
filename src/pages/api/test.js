import dbConnect from "@/libs/dbConnect";
import HistoryModel from "@/models/HistoryModel";

module.exports = async (req, res) => {
  await dbConnect()
  HistoryModel.find({}).populate('author')
  .then(his=>{
    res.send(his)
  })
}