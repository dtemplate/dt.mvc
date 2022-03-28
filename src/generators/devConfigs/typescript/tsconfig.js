import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const tsconfigFile = fs.readFileSync(
    `${templateDirectory}/src/base/devConfigs/typescript/tsconfig.json.dt`,
    "utf8"
  );
  fs.writeFileSync(`${rootDirectory}/tsconfig.json`, tsconfigFile);
};
