import { IRouter } from '@app/interfaces/api';
import { routerBuilder } from '@appTest/server/builders';
import { submitHelperMockHtmlPositive, submitHelperMockHtmlNegative } from '@appTest/mocks/core/websiteRunners/helpers';

export const submitHelperRouter: IRouter = routerBuilder(submitHelperMockHtmlPositive, submitHelperMockHtmlNegative);
