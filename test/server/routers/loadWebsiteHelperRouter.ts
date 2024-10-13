import { IRouter } from '@app/interfaces/api';
import { routerBuilder } from '@appTest/server/builders';
import { loadWebsiteHelperMockHtmlPositive } from '@appTest/mocks/core/websiteRunners/helpers';

export const loadWebsiteHelperRouter: IRouter = routerBuilder(loadWebsiteHelperMockHtmlPositive);
