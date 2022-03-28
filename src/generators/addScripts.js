import npmAddScript from "npm-add-script";

export const main = async ({ rootDirectory, templateDirectory }) => {
  npmAddScript({
    key: "start",
    value: "node dist/shared/infra/http/server.js",
  });
  npmAddScript({
    key: "dev",
    value:
      "ts-node-dev --exit-child --respawn --ignore-watch node_modules -r tsconfig-paths/register src/shared/infra/http/server.ts",
  });
  npmAddScript({
    key: "test",
    value: "jest",
  });
  npmAddScript({
    key: "build",
    value:
      'babel src --extensions ".js,.ts" --out-dir dist --copy-files --no-copy-ignored',
  });
};
