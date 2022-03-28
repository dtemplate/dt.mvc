import fs from "fs";

export const main = async ({ rootDirectory, templateDirectory }) => {
  const testFile = fs.readFileSync(
    `${templateDirectory}/src/base/fileStructure/tests/TestImportation.test.ts.dt`,
    "utf8"
  );
  fs.writeFileSync(
    `${rootDirectory}/__tests__/TestImportation.test.ts`,
    testFile
  );
};
