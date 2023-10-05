import { blockchain } from "./blockFactory/genesis";
import { AppDataSource } from "./data-source";
import { Block } from "./entity/block";

AppDataSource.initialize().then(async () => {

    await AppDataSource.manager.save(blockchain.chain[blockchain.chain.length - 1])
    //await AppDataSource.manager.save(secondBlock)
    await AppDataSource.manager.save(new Block(2))
    const blocks = await AppDataSource.manager.find(Block)


    console.log(blocks);

}).catch(error => console.log(error))

