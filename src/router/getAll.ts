import { Request, Response } from "express";
import { AppDataSource } from "../data/data-source";
import { Block } from "../entity/block";

const express = require("express")

export const showBlockChain = express.Router()
/**
 * get all Blocks and send to frontend
 */
showBlockChain.get('/', async (_req: Request, res: Response) => {
    const fetch = await AppDataSource.manager.find(Block);
    res.json(fetch)
})