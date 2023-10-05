import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Block } from "../entity/block";

const express = require("express")

export const showBlockChain = express.Router()

showBlockChain.get('/', async (_req: Request, res: Response) => {
    const fetch = await AppDataSource.manager.find(Block);
    res.json(fetch)
})
