import { AppDataSource } from "../data/data-source";
import { Block } from "../entity/block";

export async function addBlockFactory(amount: number) {
    const currentBlockChain = await AppDataSource.manager.find(Block);
    const prevousHash = currentBlockChain[currentBlockChain.length - 1].blockHash;
    const newBlock = new Block(
        amount,
        prevousHash,
        false
    );
    await AppDataSource.manager.save(newBlock);


}