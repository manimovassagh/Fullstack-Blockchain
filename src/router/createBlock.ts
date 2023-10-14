import { Request, Response } from "express";
import { addBlockFactory } from "../blockFactory/blockFactory";

const express = require('express');

export const createBlockRouter = express.Router();
/**
 * This is the route for creating blocks.
 */
createBlockRouter.post('/create', (req: Request, res: Response) => {

    if (req.body && req.body.amount !== undefined) {

        const amount = req.body.amount;
        if (!Number(amount)) {
            res.status(400).json({ error: 'OOPS!!! Please give proper number as amount' });
            return;

        }
        addBlockFactory(Number(amount));

        res.status(200).json({ message: `Received amount: ${amount}` });
    } else {
        res.status(400).json({ error: 'Missing "amount" field in the request body' });
    }
});