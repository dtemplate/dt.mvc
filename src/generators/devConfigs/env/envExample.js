import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const envExampleFile = fs.readFileSync(
    `${templateDirectory}/src/base/devConfigs/env/.env.example.dt`,
    "utf8"
  );
  fs.writeFileSync(`${rootDirectory}/.env.example`, envExampleFile);
};
