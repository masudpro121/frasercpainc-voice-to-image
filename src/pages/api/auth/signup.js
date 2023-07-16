import dbConnect from "@/libs/dbConnect";
import UserModel from "@/models/UserModel";
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


export default async function signup(req, res){
  try{
    if(req.method=='POST'){
      await dbConnect()
      const {name, email, password, uid, date} = req.body
      const hashedPass = bcrypt.hashSync("pass"+uid, salt);
      const user = new UserModel({
        name, email, password:hashedPass,
        uid, date
      })
      user.save()
      .then(()=>{
        res.send({status:'ok'})
      })
      .catch(err=>{
        res.status(500).json({status:'error'})
      })
    }
  }catch(err){
    console.log(err);
  }
}