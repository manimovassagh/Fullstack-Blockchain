import { SHA256 } from "crypto-js";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AppDataSource } from "../data-source";


@Entity()
export class Block {
    @PrimaryGeneratedColumn()
    public index: number;
    @Column()
    public blockHash: string;
    @Column()
    public unit: string;
    @Column()
    public timestamp: Date
    @Column()
    public amount: number
    @Column()
    public previousHash: string
    @Column()
    public isGenesis: boolean
    constructor(
        amount: number,
        previousHash = "",
        isGenesis: boolean = false,
    ) {
        this.isGenesis = isGenesis;

        this.timestamp = new Date();
        this.amount = amount;
        this.previousHash = previousHash;
        this.blockHash = this.calculateHash();
        this.unit = "Next-Gen-Coin"
    }
    calculateHash(): any {
        return SHA256(
            this.index +
            this.previousHash
            + this.timestamp
            + String(this.amount)).toString();
    }



}