import { Express } from "express";
import { dashboardRoutes } from "./dashboard.route";
import { systemConfig } from "../../config/system";
import { topicRoutes } from "./topic.route";
import { songRoutes } from "./song.route";
import { uploadRoutes } from "./upload.route";


const adminRoutes = (app: Express): void => {

    const prefixAdmin = systemConfig.prefixAdmin;

    app.use(`/${prefixAdmin}/dashboard`, dashboardRoutes);

    app.use(`/${prefixAdmin}/topics`, topicRoutes);

    app.use(`/${prefixAdmin}/songs`, songRoutes);

    app.use(`/${prefixAdmin}/upload`, uploadRoutes);
};

export default adminRoutes;