import { Express } from "express";
import { dashboardRoutes } from "./dashboard.route";
import { systemConfig } from "../../config/system";
import { topicRoutes } from "./topic.route";
import { songRoutes } from "./song.route";

const adminRoutes = (app: Express): void => {

    const prefixAdmin = systemConfig.prefixAdmin;

    app.use(`/${prefixAdmin}/dashboard`, dashboardRoutes);

    app.use(`/${prefixAdmin}/topics`, topicRoutes);

    app.use(`/${prefixAdmin}/songs`, songRoutes);
};

export default adminRoutes;