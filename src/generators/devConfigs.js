import { main as tsconfigGenerator } from "./devConfigs/typescript/tsconfig";
import { main as readmeGenerator } from "./devConfigs/docs/readme";
import { main as prettierConfigGenerator } from "./devConfigs/lint/prettierConfig";
import { main as jestConfigGenerator } from "./devConfigs/test/jestConfig";
import { main as commitlintConfigGenerator } from "./devConfigs/git/commitlintConfig";
import { main as babelConfigGenerator } from "./devConfigs/typescript/babelConfig";
import { main as gitignoreGenerator } from "./devConfigs/git/gitignore";
import { main as eslintrcConfigGenerator } from "./devConfigs/lint/eslintrcConfig";
import { main as eslintignoreGenerator } from "./devConfigs/lint/eslintignore";
import { main as envGenerator } from "./devConfigs/env/env";
import { main as envExampleGenerator } from "./devConfigs/env/envExample";
import { main as editorconfigGenerator } from "./devConfigs/lint/editorconfig";

export const main = async ({ rootDirectory, templateDirectory }) => {
  await tsconfigGenerator({ rootDirectory, templateDirectory });
  await readmeGenerator({ rootDirectory, templateDirectory });
  await prettierConfigGenerator({ rootDirectory, templateDirectory });
  await jestConfigGenerator({ rootDirectory, templateDirectory });
  await commitlintConfigGenerator({ rootDirectory, templateDirectory });
  await babelConfigGenerator({ rootDirectory, templateDirectory });
  await gitignoreGenerator({ rootDirectory, templateDirectory });
  await eslintrcConfigGenerator({ rootDirectory, templateDirectory });
  await eslintignoreGenerator({ rootDirectory, templateDirectory });
  await envGenerator({ rootDirectory, templateDirectory });
  await envExampleGenerator({ rootDirectory, templateDirectory });
  await editorconfigGenerator({ rootDirectory, templateDirectory });
};
