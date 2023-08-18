import { Router } from "express";
import { projectsControllers } from "../controllers";
import { developerIdExists } from "../middlewares";
import { projectIdExists } from "../middlewares/projectIdExistes.middleware";

const projectsRouter: Router = Router();

projectsRouter.post("", developerIdExists, projectsControllers.create);
projectsRouter.get("/:id", projectIdExists, projectsControllers.retrieve);
projectsRouter.patch("/:id", projectIdExists, developerIdExists, projectsControllers.partialUpdate);

export default projectsRouter;
