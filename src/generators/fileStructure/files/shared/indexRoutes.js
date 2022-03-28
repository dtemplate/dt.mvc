import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const indexRoutesFile = fs.readFileSync(
    `${templateDirectory}/src/base/fileStructure/shared/indexRoutes.ts.dt`,
    "utf8"
  );
  fs.writeFileSync(
    `${rootDirectory}/src/shared/infra/http/routes/index.ts`,
    indexRoutesFile
  );
};
