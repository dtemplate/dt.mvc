import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const eslintignoreFile = fs.readFileSync(
    `${templateDirectory}/src/base/devConfigs/lint/.eslintignore.dt`,
    "utf8"
  );
  fs.writeFileSync(`${rootDirectory}/.eslintignore`, eslintignoreFile);
};
