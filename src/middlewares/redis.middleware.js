import { client } from "../config/redisDataBase";
import HttpStatus from 'http-status-codes';

export const checkCache = async (req, res, next) => {
    let redisData = await client.get('getall');
    if (redisData) {
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: JSON.parse(redisData),
            message: "All cache notes fatched....."
        })
    }
    else {
        next();
    }
}
