import { Request, Response } from "express";
import { Projects } from "../interfaces";
import { projectsServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const projects: Projects = await projectsServices.create(req.body);
  return res.status(201).json(projects);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const projects: Projects = await projectsServices.retrieve(req.params.id);

  return res.status(200).json(projects);
};

const partialUpdate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  const projectsId = req.params.id;

  const projects: Projects = await projectsServices.partialUpdate(
    projectsId,
    body
  );
  return res.status(200).json(projects);
};

export default { create, retrieve, partialUpdate };
