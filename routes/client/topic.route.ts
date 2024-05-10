import {Router, Request, Response} from "express";
const router: Router = Router();

import Topic from "../../models/topic.model";

router.get("/", async (req: Request, res: Response) => {
    const topics = await Topic.find({
        deleted: false
    });

    console.log(topics);

    res.render("client/pages/topics/index");
});

export const topicRoutes: Router = router;