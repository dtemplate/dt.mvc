import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const appFile = fs.readFileSync(
    `${templateDirectory}/src/base/fileStructure/shared/app.ts.dt`,
    "utf8"
  );
  fs.writeFileSync(`${rootDirectory}/src/shared/infra/http/app.ts`, appFile);
};
