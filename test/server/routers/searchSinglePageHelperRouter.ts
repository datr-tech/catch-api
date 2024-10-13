import { IRouter } from '@app/interfaces/api';
import { routerBuilder } from '@appTest/server/builders';
import {
  searchSinglePageHelperMockHtmlPositive,
  searchSinglePageHelperMockHtmlNegative,
} from '@appTest/mocks/core/websiteRunners/helpers';

export const searchSinglePageHelperRouter: IRouter = routerBuilder(
  searchSinglePageHelperMockHtmlPositive,
  searchSinglePageHelperMockHtmlNegative,
);
