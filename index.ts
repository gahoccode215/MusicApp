import express, { Express} from "express";
import dotenv from "dotenv";
import {connect as connectDatabse} from "./config/database";
import clientRoutes from "./routes/client/index.route";

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

dotenv.config();
connectDatabse();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
//Routes
clientRoutes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})