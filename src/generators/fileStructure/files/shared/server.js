import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const serverFile = fs.readFileSync(
    `${templateDirectory}/src/base/fileStructure/shared/server.ts.dt`,
    "utf8"
  );
  fs.writeFileSync(
    `${rootDirectory}/src/shared/infra/http/server.ts`,
    serverFile
  );
};
