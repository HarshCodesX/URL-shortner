import express from "express";
import {nanoid} from "nanoid";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/mongo.config.js";
import short_url from "./src/routes/short_url.route.js";
import { redirectFromShortUrl } from "./src/controllers/short_url.controller.js";

dotenv.config("./.env");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/create", short_url);

app.get("/:id", redirectFromShortUrl);

app.listen(3000, () => {
    connectDB();
    console.log("server is running on http://localhost:3000");
});