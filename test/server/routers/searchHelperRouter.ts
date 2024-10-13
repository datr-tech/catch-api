import { IRouter } from '@app/interfaces/api';
import { routerBuilder } from '@appTest/server/builders';
import { searchHelperMockHtmlPositive, searchHelperMockHtmlNegative } from '@appTest/mocks/core/runners/helpers';

export const searchHelperRouter: IRouter = routerBuilder(searchHelperMockHtmlPositive, searchHelperMockHtmlNegative);
