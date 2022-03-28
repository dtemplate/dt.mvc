import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const prettierConfigFile = fs.readFileSync(
    `${templateDirectory}/src/base/devConfigs/lint/prettier.config.js.dt`,
    "utf8"
  );
  fs.writeFileSync(`${rootDirectory}/prettier.config.js`, prettierConfigFile);
};
