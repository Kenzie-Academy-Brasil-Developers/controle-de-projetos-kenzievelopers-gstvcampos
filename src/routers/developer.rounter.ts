import { Router } from "express";
import { developerControllers } from "../controllers";
import { developerIdExists, developerIdHasInfoExists, developerInfoOS, uniqueEmail } from "../middlewares";

const developerRouter: Router = Router();

developerRouter.post("", uniqueEmail, developerControllers.create);
developerRouter.get("/:id", developerIdExists, developerControllers.retrieve);
developerRouter.patch("/:id",developerIdExists, uniqueEmail, developerControllers.partialUpdate);
developerRouter.delete("/:id",developerIdExists, developerControllers.destroy);
developerRouter.post("/:id/infos",developerIdExists,developerInfoOS, developerIdHasInfoExists, developerControllers.createInfo);

export default developerRouter;
