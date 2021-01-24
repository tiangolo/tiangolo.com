import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const projectsFilePath = path.join(process.cwd(), "data", "projects.yml");

export interface Project {
  name: string;
  link: string;
  description: string;
}

export interface ProjectsData {
  name: string;
  source: Project[];
}

export function getProjects(): ProjectsData {
  const doc = yaml.load(fs.readFileSync(projectsFilePath, "utf-8"));
  return doc as ProjectsData;
}
