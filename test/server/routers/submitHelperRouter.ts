import { IRouter } from '@app/interfaces/api';
import { routerBuilder } from '@appTest/server/builders';
import { submitHelperMockHtmlPositive, submitHelperMockHtmlNegative } from '@appTest/mocks/core/runners/helpers';

export const submitHelperRouter: IRouter = routerBuilder(submitHelperMockHtmlPositive, submitHelperMockHtmlNegative);
