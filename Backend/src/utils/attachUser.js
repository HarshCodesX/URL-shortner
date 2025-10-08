import { findUserById } from "../dao/user.dao.js";
import { verifyToken } from "./helper.js";

export const attachUser = async (req, res, next) => {
    console.log(req.cookies.accessToken);
    const token = req.cookies.accessToken;
    if(!token) return next();

    try {
        const decoded = verifyToken(token);
        console.log(decoded, "this one");
        const user = await findUserById(decoded);
        console.log(user);
        if(!user) return next();
        req.user = user;
        next();
    } catch (error) {
        next();
    }
}