import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const readmeFile = fs.readFileSync(
    `${templateDirectory}/src/base/devConfigs/docs/README.md.dt`,
    "utf8"
  );
  fs.writeFileSync(`${rootDirectory}/README.md`, readmeFile);
};
