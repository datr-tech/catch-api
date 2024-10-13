import { IRouter } from '@app/interfaces/api';
import { routerBuilder } from '@appTest/server/builders';
import {
  enterSearchTermHelperMockHtmlPositive,
  enterSearchTermHelperMockHtmlNegative,
} from '@appTest/mocks/core/websiteRunners/helpers';

export const enterSearchTermHelperRouter: IRouter = routerBuilder(
  enterSearchTermHelperMockHtmlPositive,
  enterSearchTermHelperMockHtmlNegative,
);
