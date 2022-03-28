import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const envFile = fs.readFileSync(
    `${templateDirectory}/src/base/devConfigs/env/.env.dt`,
    "utf8"
  );
  fs.writeFileSync(`${rootDirectory}/.env`, envFile);
};
