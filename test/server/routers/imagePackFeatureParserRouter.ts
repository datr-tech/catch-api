import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { IRouter } from '@app/interfaces/api';
import { routerBuilderByTestType } from '@appTest/server/builders';
import { IFileToServeByTestType } from '@appTest/server/interfaces/builders';

const filesToServeByTestType: IFileToServeByTestType[] = [
  {
    testType: 'aston',
    filePath: `${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/parsers/features/imagePack/imagePackFeatureParser.aston.html`,
  },
  {
    testType: 'australian-coast',
    filePath: `${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/parsers/features/imagePack/imagePackFeatureParser.australian.coast.html`,
  },
  {
    testType: 'climbing',
    filePath: `${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/parsers/features/imagePack/imagePackFeatureParser.climbing.html`,
  },
  {
    testType: 'vw-golf',
    filePath: `${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/parsers/features/imagePack/imagePackFeatureParser.vw.golf.html`,
  },
];

export const imagePackFeatureParserRouter: IRouter = routerBuilderByTestType({
  filesToServeByTestType,
});
