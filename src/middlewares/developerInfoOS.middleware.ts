import { NextFunction, Request, Response } from "express";
import { DeveloperInfosResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";

export const developerInfoOS = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const allowedOS = new Set(["Windows", "MacOS", "Linux"]);
  const preferredOS: string = req.body.preferredOS;

  if (!preferredOS || !allowedOS.has(preferredOS)) {
    throw new AppError(
      "Invalid OS option. Please choose from the available options. [windows, macOS, linux]",
      400
    );
  }

  return next();
};
