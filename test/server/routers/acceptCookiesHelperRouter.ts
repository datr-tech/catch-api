import { IRouter } from '@app/interfaces/api';
import { routerBuilder } from '@appTest/server/builders';
import {
  acceptCookiesHelperMockHtmlPositive,
  acceptCookiesHelperMockHtmlNegative,
} from '@appTest/mocks/core/runners/helpers';

export const acceptCookiesHelperRouter: IRouter = routerBuilder(
  acceptCookiesHelperMockHtmlPositive,
  acceptCookiesHelperMockHtmlNegative,
);
