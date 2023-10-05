import { SHA256 } from 'crypto-js';
import { Block } from "../entity/block";


export const genesisBlock = new Block(1_000_000,
    SHA256("This is genesis block secret!!! :)))"),
    true)



