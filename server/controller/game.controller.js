import { Game } from "../models/game.model.js";
export const addGame = async (req,res,next) =>{

    const data = {
        title : req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        image:req.body.image
    }
    
    await Game.create(data); //db operation

    res.json({
        message:"Game added to Velocity "
    });
    
}