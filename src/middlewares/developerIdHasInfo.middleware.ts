import { NextFunction, Request, Response } from "express";
import { DeveloperInfosResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";

export const developerIdHasInfoExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: string = req.params.id;

  const query: DeveloperInfosResult = await client.query(
    'SELECT * FROM "developerInfos" WHERE "developerId" = $1;',
    [id]
  );

  if (query.rowCount) {
    throw new AppError("Developer with the specified ID already contains additional information.", 409);
  }

  return next();
};
