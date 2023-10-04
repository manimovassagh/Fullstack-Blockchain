import { blockchain } from "./blockFactory/genesis";
import { AppDataSource } from "./data-source";
import { Block } from "./entity/User";

AppDataSource.initialize().then(async () => {
    
    await AppDataSource.manager.save(blockchain.chain[blockchain.chain.length-1])
    //await AppDataSource.manager.save(secondBlock)
    const blocks = await AppDataSource.manager.find(Block)
   
console.log(blocks);

}).catch(error => console.log(error))

