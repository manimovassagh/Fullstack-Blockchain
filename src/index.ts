import { genesisBlock, secondBlock } from "./blockFactory/genesis"
import { AppDataSource } from "./data-source"
import { Block } from "./entity/User"

AppDataSource.initialize().then(async () => {
    console.log("Inserting a new user into the database...")
    await AppDataSource.manager.save(genesisBlock)
    await AppDataSource.manager.save(secondBlock)
    const blocks = await AppDataSource.manager.find(Block)
    console.log("Loaded Blocks: ", blocks)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
