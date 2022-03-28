import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const gitignoreFile = fs.readFileSync(
    `${templateDirectory}/src/base/devConfigs/git/prepare-commit-msg.dt`,
    "utf8"
  );
  fs.writeFileSync(`${rootDirectory}/.husky/prepare-commit-msg`, gitignoreFile);
};
