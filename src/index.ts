const express = require('express')
const cors = require('cors')
const colors = require('colors');
import { addBlockFactory } from "./blockFactory/blockFactory";
import { genesisBlock } from "./blockFactory/genesis";
import { PORT } from "./constants/port";
import { AppDataSource } from "./data-source";
import { Block } from "./entity/block";
import { logger } from "./logger/logger";
import { createBlockRouter } from "./router/createBlock";
import { showBlockChain } from "./router/getAll";


const app = express()
app.use(cors())
app.use(express.json());

AppDataSource.initialize().then(async () => {
    const fetch = await AppDataSource.manager.find(Block);
    if (!fetch.length) {
        await AppDataSource.manager.save(genesisBlock);
    }
    //add sample starter
    await addBlockFactory(3);
}).catch(error => logger.warn(error));

app.use(createBlockRouter)
app.use(showBlockChain)

app.listen(PORT, () => {
    console.log(colors.green(`Blockchain NGC server listening on port ${PORT}`));
})