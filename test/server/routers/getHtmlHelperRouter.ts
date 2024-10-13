import { IRouter } from '@app/interfaces/api';
import { routerBuilder } from '@appTest/server/builders';
import { getHtmlHelperMockHtmlPositive } from '@appTest/mocks/core/websiteRunners/helpers';

export const getHtmlHelperRouter: IRouter = routerBuilder(getHtmlHelperMockHtmlPositive);
