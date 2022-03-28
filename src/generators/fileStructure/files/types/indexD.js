import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const typesFile = fs.readFileSync(
    `${templateDirectory}/src/base/fileStructure/types/index.d.ts.dt`,
    "utf8"
  );
  fs.writeFileSync(`${rootDirectory}/src/@types/index.d.ts`, typesFile);
};
