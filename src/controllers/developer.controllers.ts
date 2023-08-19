import { Request, Response } from "express";
import { Developer, DeveloperInfos, DeveloperInfosCreate } from "../interfaces";
import { developerServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const developer: Developer = await developerServices.create(req.body);
  return res.status(201).json(developer);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const developer: Developer = await developerServices.retrieve(
    req.params.DeveloperId
  );

  return res.status(200).json(developer);
};

const partialUpdate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  const { developerId } = req.params;

  const developer: Developer = await developerServices.partialUpdate(
    developerId,
    body
  );
  return res.status(200).json(developer);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await developerServices.destroy(req.params.DeveloperId);
  return res.status(204).json();
};

const createInfo = async (req: Request, res: Response): Promise<Response> => {
  const payload: DeveloperInfosCreate = {
    ...req.body,
    developerId: req.params.id,
  };

  console.log(payload);

  const developerInfo: DeveloperInfos = await developerServices.createInfo(
    payload
  );
  return res.status(201).json(developerInfo);
};

export default { create, retrieve, partialUpdate, destroy, createInfo };
