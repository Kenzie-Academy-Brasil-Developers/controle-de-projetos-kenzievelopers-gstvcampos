import { QueryResult } from "pg";

type Projects = {
  id: number;
  name: string;
  description: string;
  repository: string;
  startDate: Date | string;
  endDate?: Date | string;
  developerId?: number;
};

type ProjectsResult = QueryResult<Projects>;
type ProjectsCreate = Omit<Projects, "id">;
type ProjectsUpdate = Partial<ProjectsCreate>;

export { Projects, ProjectsCreate, ProjectsResult, ProjectsUpdate };
