import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const jestConfigFile = fs.readFileSync(
    `${templateDirectory}/src/base/devConfigs/test/jest.config.ts.dt`,
    "utf8"
  );
  fs.writeFileSync(`${rootDirectory}/jest.config.ts`, jestConfigFile);
};
