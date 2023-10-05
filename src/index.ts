import { addBlockFactory } from "./blockFactory/blockFactory";
import { genesisBlock } from "./blockFactory/genesis";
import { PORT } from "./constants/port";
import { AppDataSource } from "./data-source";
import { Block } from "./entity/block";
import { logger } from "./logger/logger";
import { showBlockChain } from "./router/getAll";
const express = require('express')
const app = express()

AppDataSource.initialize().then(async () => {
    const fetch = await AppDataSource.manager.find(Block);
    if (!fetch.length) {
        await AppDataSource.manager.save(genesisBlock);
    }
    //add sample starter
    await addBlockFactory(3);
}).catch(error => logger.warn(error));


app.use(showBlockChain)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})