import urlSchema from "../models/short_url.model.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
    try {
        const newUrl = new urlSchema({
            full_url: longUrl,
            short_url: shortUrl
        });
        if(userId){ //why do we have this if-block here
            newUrl.user_id = userId;
        }
        await newUrl.save();
    } catch (error) {
        if(error.code == 11000){
            throw new ConflictError(error);
        }
        throw new Error(error);
    }
}

export const getShortUrl = async (shortUrl) => {
    return await urlSchema.findOneAndUpdate(
        {short_url: shortUrl},
        {$inc: {clicks: 1}},
        {new: true}
    )
}

//checking if 2 users doesn't select same slug, else they will be redirected to same website
export const getCustomShortUrl = async (slug) => {
    return await urlSchema.findOne({short_url: slug});
}