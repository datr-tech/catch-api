import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { IRouter } from '@app/interfaces/api';
import { routerBuilderByTestType } from '@appTest/server/builders';
import { IFileToServeByTestType } from '@appTest/server/interfaces/builders';

const filesToServeByTestType: IFileToServeByTestType[] = [
  {
    testType: 'positive',
    filePath: `${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/parsers/features/imagePack/imagePackFeatureParser.positive.html`,
  },
];

export const imagePackFeatureParserRouter: IRouter = routerBuilderByTestType({
  filesToServeByTestType,
});
