import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUser } from "../services/short_url.service.js";

export const createShortUrl = async (req, res) => {
    const {url} = req.body;
    const shortUrl = await createShortUrlWithoutUser(url);
    res.send(process.env.App_URL + shortUrl);
}

export const redirectFromShortUrl = async (req, res) => {
    const {id} = req.params;
    const url = await getShortUrl(id);
    console.log(url);
    res.redirect(url.full_url);
}