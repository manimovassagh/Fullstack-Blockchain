import { addBlockFactory } from "./blockFactory/blockFactory";
import { genesisBlock } from "./blockFactory/genesis";
import { AppDataSource } from "./data-source";
import { Block } from "./entity/block";
import { logger } from "./logger/logger";


AppDataSource.initialize().then(async () => {

    await AppDataSource.manager.save(genesisBlock)
    await addBlockFactory(3);
    await addBlockFactory(4.4);
    await addBlockFactory(22.45);
    await addBlockFactory(44.45);

    console.log(await AppDataSource.manager.find(Block));

}).catch(error => logger.warn(error))


