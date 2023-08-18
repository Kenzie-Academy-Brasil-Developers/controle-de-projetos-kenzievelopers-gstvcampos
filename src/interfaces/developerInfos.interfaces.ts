import { QueryResult } from "pg";

type DeveloperInfos = {
  id: number;
  developerSince: Date | string;
  preferredOS: "windows" | "linux" | "macOS";
  developerId: number;
};

type DeveloperInfosResult = QueryResult<DeveloperInfos>;

type DeveloperInfosCreate = Omit<DeveloperInfos, "id">;

export { DeveloperInfos, DeveloperInfosResult, DeveloperInfosCreate };
