import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { IRouter } from '@app/interfaces/api';
import { routerBuilderByTestType } from '@appTest/server/builders';
import { IFileToServeByTestType } from '@appTest/server/interfaces/builders';

const filesToServeByTestType: IFileToServeByTestType[] = [
  {
    testType: 'negative',
    filePath: `${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/runners/helpers/submitHelper.negative.html`,
  },
  {
    testType: 'positive',
    filePath: `${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/runners/helpers/submitHelper.positive.html`,
  },
];

export const submitHelperRouter: IRouter = routerBuilderByTestType({
  filesToServeByTestType,
});
