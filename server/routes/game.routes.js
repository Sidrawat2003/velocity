import express from "express";
import { addGame } from "../controller/game.controller.js";

const gameRouter = express.Router();


gameRouter
    .route('/addgame')
    .post(addGame);


export default gameRouter;