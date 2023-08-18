import { NextFunction, Request, Response } from "express";
import { ProjectsResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";

export const projectIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: string = req.params.id;

  const query: ProjectsResult = await client.query(
    'SELECT * FROM "projects" WHERE "id" = $1;',
    [id]
  );

  if (!query.rowCount) {
    throw new AppError("Project not found.", 404);
  }

  return next();
};
