import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  fs.mkdirSync(`${rootDirectory}/src/shared`);
  fs.mkdirSync(`${rootDirectory}/src/shared/errors`);
  fs.mkdirSync(`${rootDirectory}/src/shared/infra`);
  fs.mkdirSync(`${rootDirectory}/src/shared/infra/database`);
  fs.mkdirSync(`${rootDirectory}/src/shared/infra/http`);
  fs.mkdirSync(`${rootDirectory}/src/shared/infra/http/middlewares`);
  fs.mkdirSync(`${rootDirectory}/src/shared/infra/http/routes`);
};
