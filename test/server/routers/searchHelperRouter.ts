import { IRouter } from '@app/interfaces/api';
import { routerBuilder } from '@appTest/server/builders';
import { searchHelperMockHtmlPositive, searchHelperMockHtmlNegative } from '@appTest/mocks/core/websiteRunners/helpers';

export const searchHelperRouter: IRouter = routerBuilder(searchHelperMockHtmlPositive, searchHelperMockHtmlNegative);
