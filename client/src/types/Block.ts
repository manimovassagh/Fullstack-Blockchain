export interface Block{
    isGenesis: boolean
    timestamp: string
    amount: number
    previousHash: string
    blockHash: string
    unit: string
    index: number 
}