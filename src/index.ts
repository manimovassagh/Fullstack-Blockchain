const express = require('express')
const cors = require('cors')
const colors = require('colors');
import { genesisBlock } from "./blockFactory/genesis";
import { PORT, SERVER_MESSAGE } from "./constants/port";
import { AppDataSource } from "./data/data-source";
import { Block } from "./entity/block";
import { logger } from "./logger/logger";
import { createBlockRouter } from "./router/createBlock";
import { showBlockChain } from "./router/getAll";


const app = express()
app.use(cors())
app.use(express.json());

AppDataSource.initialize().then(async () => {
    const fetch = await AppDataSource.manager.find(Block);
    if (fetch.length == 0) {
        await AppDataSource.manager.save(genesisBlock);
    }

}).catch(error => logger.warn(error));

app.use(createBlockRouter)
app.use(showBlockChain)

app.listen(PORT, () => {
    console.log(colors.bgMagenta(`${SERVER_MESSAGE} ${PORT}`));
})
