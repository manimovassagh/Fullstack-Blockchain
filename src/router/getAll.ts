import { Request, Response } from "express";
import { AppDataSource } from "../data/data-source";
import { Block } from "../entity/block";

const express = require("express")

export const showBlockChain = express.Router()
/**
 * get all Blocks and send to frontend
 */
showBlockChain.get('/', async (req: Request, res: Response) => {
    console.log("This is backend log !!!", JSON.stringify(req.headers.authorization));

    const fetch = await AppDataSource.manager.find(Block);
    res.json(fetch)
})
