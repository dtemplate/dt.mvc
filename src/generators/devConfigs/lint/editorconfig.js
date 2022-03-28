import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const editorconfigFile = fs.readFileSync(
    `${templateDirectory}/src/base/devConfigs/lint/.editorconfig.dt`,
    "utf8"
  );
  fs.writeFileSync(`${rootDirectory}/.editorconfig`, editorconfigFile);
};
