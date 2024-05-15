import { Express } from "express";
import { dashboardRoutes } from "./dashboard.route";
import { systemConfig } from "../../config/system";
import { topicRoutes } from "./topic.route";

const adminRoutes = (app: Express): void => {

    const prefixAdmin = systemConfig.prefixAdmin;

    app.use(`/${prefixAdmin}/dashboard`, dashboardRoutes);

    app.use(`/${prefixAdmin}/topics`, topicRoutes);
};

export default adminRoutes;