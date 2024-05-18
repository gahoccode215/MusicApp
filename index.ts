import express, { Express } from "express";
import dotenv from "dotenv";
import { connect as connectDatabse } from "./config/database";
import clientRoutes from "./routes/client/index.route";
import adminRoutes from "./routes/admin/index.route";
import { systemConfig } from "./config/system";
import path from "path";
import bodyParser from "body-parser";
import methodOverride from "method-override";


const app: Express = express();
const port: string | number = process.env.PORT || 3000;

dotenv.config();
connectDatabse();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.set("views", "./views");
app.set("view engine", "pug");

// TinyMCE
app.use(
    "/tinymce",
    express.static(path.join(__dirname, "node_modules", "tinymce"))
);
// End TinyMCE

app.use(express.static("public"));

// App Local Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;

//Routes
adminRoutes(app);
clientRoutes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})