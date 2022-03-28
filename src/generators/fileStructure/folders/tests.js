import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  fs.mkdirSync(`${rootDirectory}/__tests__`);
};
