import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { IRouter } from '@app/interfaces/api';
import { routerBuilderByTestType } from '@appTest/server/builders';
import { IFileToServeByTestType } from '@appTest/server/interfaces/builders';

const filesToServeByTestType: IFileToServeByTestType[] = [
  {
    testType: 'negative',
    filePath: `${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/runners/helpers/enterSearchTermHelper.negative.html`,
  },
  {
    testType: 'positive',
    filePath: `${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/runners/helpers/enterSearchTermHelper.positive.html`,
  },
];

export const enterSearchTermHelperRouter: IRouter = routerBuilderByTestType({
  filesToServeByTestType,
});
