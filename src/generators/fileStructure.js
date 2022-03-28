import { main as srcFolderGenerator } from "./fileStructure/folders/src";
import { main as utilsFolderGenerator } from "./fileStructure/folders/utils";
import { main as sharedFolderGenerator } from "./fileStructure/folders/shared";
import { main as modulesFolderGenerator } from "./fileStructure/folders/modules";
import { main as configFolderGenerator } from "./fileStructure/folders/config";
import { main as typesFolderGenerator } from "./fileStructure/folders/types";
import { main as testsFolderGenerator } from "./fileStructure/folders/tests";

import { main as indexDFileGenerator } from "./fileStructure/files/types/indexD";
import { main as userControllerFileGenerator } from "./fileStructure/files/modules/userController";
import { main as userRoutesFileGenerator } from "./fileStructure/files/modules/userRoutes";
import { main as indexRoutesFileGenerator } from "./fileStructure/files/shared/indexRoutes";
import { main as appFileGenerator } from "./fileStructure/files/shared/app";
import { main as serverFileGenerator } from "./fileStructure/files/shared/server";
import { main as testFileGenerator } from "./fileStructure/files/tests/TestImportationTest";

export const main = async ({ rootDirectory, templateDirectory }) => {
  await srcFolderGenerator({ rootDirectory, templateDirectory });
  await utilsFolderGenerator({ rootDirectory, templateDirectory });
  await sharedFolderGenerator({ rootDirectory, templateDirectory });
  await modulesFolderGenerator({ rootDirectory, templateDirectory });
  await configFolderGenerator({ rootDirectory, templateDirectory });
  await typesFolderGenerator({ rootDirectory, templateDirectory });
  await testsFolderGenerator({ rootDirectory, templateDirectory });

  await indexDFileGenerator({ rootDirectory, templateDirectory });
  await userControllerFileGenerator({ rootDirectory, templateDirectory });
  await userRoutesFileGenerator({ rootDirectory, templateDirectory });
  await indexRoutesFileGenerator({ rootDirectory, templateDirectory });
  await appFileGenerator({ rootDirectory, templateDirectory });
  await serverFileGenerator({ rootDirectory, templateDirectory });
  await testFileGenerator({ rootDirectory, templateDirectory });
};
