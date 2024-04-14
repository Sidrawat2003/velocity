import  mongoose, { Schema }  from "mongoose";

const gameSchema = new mongoose.Schema({
     title:{
      type:String,
      required:true,
      trim:true,
     },
     description:{
      type:String,
      required:true,
      lowercase:true,
      trim:true,
     },
     category:{
      type:String,
      required:true,
     },
     image:{
        type:String,
        required: true,
     },
     price :{
        type:Number,
        required:true,
     }
      
},{
   timestamps:true
})

const Game= mongoose.model("Game",gameSchema)  

export {Game};