import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const babelConfigFile = fs.readFileSync(
    `${templateDirectory}/src/base/devConfigs/typescript/babel.config.js.dt`,
    "utf8"
  );
  fs.writeFileSync(`${rootDirectory}/babel.config.js`, babelConfigFile);
};
