
import { Block } from "../entity/User";




export class Blockchain {
    chain: Block[];
    constructor() {
        this.chain = [this.createGenesisBlock()]
    }


    private createGenesisBlock(): Block {
        return new Block(1_000_000,
            "'61a7ba410806a3a17", true)
    }

    private getLastBlock(): Block {
        return this.chain[this.chain.length - 1];
    }
    public addBlock(newBlock: Block): void {
        newBlock.previousHash = this.getLastBlock().blockHash;
        newBlock.blockHash = newBlock.calculateHash();
        this.chain.push(newBlock);

    }

    public isChainValid(): boolean {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.blockHash !== currentBlock.calculateHash()) {
                console.log("Blockchain is not valid");
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.blockHash) {
                console.log("Blockchain is manipulated and is not acceptable");
                return false;
            }
        }
        console.log("Blockchain is valid");
        return true;

    }

}