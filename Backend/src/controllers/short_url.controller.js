import { getShortUrl } from "../dao/short_url.js";
import wrapAsync from "../utils/tryCatchWraper.js";
import { createShortUrlWithUser, createShortUrlWithoutUser } from "../services/short_url.service.js";

export const createShortUrl = wrapAsync(
    async (req, res) => {
    const {url} = req.body;
    let shortUrl;
    if(req.user){
        console.log("user is logged in, printed inside short_url controller");
        shortUrl = await createShortUrlWithUser(url, req.user._id);
    }
    else{
        shortUrl = await createShortUrlWithoutUser(url);
    }
    res.status(200).json({shortUrl: process.env.App_URL + shortUrl});
});

export const redirectFromShortUrl = wrapAsync(
    async (req, res) => {
    const {id} = req.params;
    const url = await getShortUrl(id);
    if(!url) throw new Error("Short url not found");
    res.redirect(url.full_url);
});

export const createCustomShortUrl = wrapAsync(async (req, res) => {
    const {url, slug} = req.body;
    const shortUrl = await createShortUrlWithoutUser(url, slug);
    res.status(200).json({shortUrl: process.env.App_URL + shortUrl});
})