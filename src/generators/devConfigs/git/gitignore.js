import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const gitignoreFile = fs.readFileSync(
    `${templateDirectory}/src/base/devConfigs/git/.gitignore.dt`,
    "utf8"
  );
  fs.writeFileSync(`${rootDirectory}/.gitignore`, gitignoreFile);
};
