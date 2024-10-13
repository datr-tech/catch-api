import { IRouter } from '@app/interfaces/api';
import { routerBuilder } from '@appTest/server/builders';
import { getHtmlHelperMockHtmlPositive } from '@appTest/mocks/core/runners/helpers';

export const getHtmlHelperRouter: IRouter = routerBuilder(getHtmlHelperMockHtmlPositive);
