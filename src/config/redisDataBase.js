import { createClient } from "redis";
import logger from "./logger";

export const client = createClient();

const redis = async () => {
    try {
        await client.connect();
        console.log("connected to Redis dataBase....")
        logger.info('Connected to the Redis database.');
    }
    catch (error) {
        console.log("unable to connect with redis please check your connection....", error);
        logger.error('Could not connect to the database.', error);
    }
}

export default redis;