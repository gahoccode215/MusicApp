import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {connect as connectDatabse} from "./config/database";
import Topic from "./models/topic.model";

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

dotenv.config();
connectDatabse();

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/topics", async (req: Request, res: Response) => {
    const topics = await Topic.find({
        deleted: false
    });

    console.log(topics);

    res.render("client/pages/topics/index");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})