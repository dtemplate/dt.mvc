import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const eslintrcConfigFile = fs.readFileSync(
    `${templateDirectory}/src/base/devConfigs/lint/.eslintrc.json.dt`,
    "utf8"
  );
  fs.writeFileSync(`${rootDirectory}/.eslintrc.json`, eslintrcConfigFile);
};
