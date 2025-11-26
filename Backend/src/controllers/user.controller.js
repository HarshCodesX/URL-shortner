import wrapAsync from "../utils/tryCatchWraper";
import { getAllUserUrls } from "../dao/user.dao";
import { getShortUrl } from "../dao/short_url";

export const getAllUserUrls = wrapAsync(async(req, res) => {
    const {_id} = req.user;
    // const urls = await getAllUserUrls(_id);
    const urls = await getShortUrl(_id);
    res.status(200).json({
        message: "success",
        urls
    });
})