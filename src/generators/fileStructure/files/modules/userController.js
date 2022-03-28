import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const userControllerFile = fs.readFileSync(
    `${templateDirectory}/src/base/fileStructure/modules/UserController.ts.dt`,
    "utf8"
  );
  fs.writeFileSync(
    `${rootDirectory}/src/modules/user/infra/http/controllers/UserController.ts`,
    userControllerFile
  );
};
