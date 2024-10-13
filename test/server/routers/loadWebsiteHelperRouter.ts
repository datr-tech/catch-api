import { IRouter } from '@app/interfaces/api';
import { routerBuilder } from '@appTest/server/builders';
import { loadWebsiteHelperMockHtmlPositive } from '@appTest/mocks/core/runners/helpers';

export const loadWebsiteHelperRouter: IRouter = routerBuilder(loadWebsiteHelperMockHtmlPositive);
