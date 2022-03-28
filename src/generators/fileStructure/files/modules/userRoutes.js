import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const userRoutesFile = fs.readFileSync(
    `${templateDirectory}/src/base/fileStructure/modules/user.routes.ts.dt`,
    "utf8"
  );
  fs.writeFileSync(
    `${rootDirectory}/src/modules/user/infra/http/routes/user.routes.ts`,
    userRoutesFile
  );
};
