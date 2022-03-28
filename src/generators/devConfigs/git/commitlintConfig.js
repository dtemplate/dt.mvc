import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const commitlintConfigFile = fs.readFileSync(
    `${templateDirectory}/src/base/devConfigs/git/commitlint.config.js.dt`,
    "utf8"
  );
  fs.writeFileSync(
    `${rootDirectory}/commitlint.config.js`,
    commitlintConfigFile
  );
};
