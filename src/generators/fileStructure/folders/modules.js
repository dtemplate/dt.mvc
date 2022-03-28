import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  fs.mkdirSync(`${rootDirectory}/src/modules`);
  fs.mkdirSync(`${rootDirectory}/src/modules/user`);
  fs.mkdirSync(`${rootDirectory}/src/modules/user/infra`);
  fs.mkdirSync(`${rootDirectory}/src/modules/user/infra/http`);
  fs.mkdirSync(`${rootDirectory}/src/modules/user/infra/http/controllers`);
  fs.mkdirSync(`${rootDirectory}/src/modules/user/infra/http/routes`);
  fs.mkdirSync(`${rootDirectory}/src/modules/user/infra/typeorm`);
  fs.mkdirSync(`${rootDirectory}/src/modules/user/interfaces`);
  fs.mkdirSync(`${rootDirectory}/src/modules/user/services`);
};
