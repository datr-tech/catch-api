import { IRouter } from '@app/interfaces/api';
import { routerBuilder } from '@appTest/server/builders';
import { organicSearchParserMockHtmlPositive } from '@appTest/mocks/core/parsers';

export const organicSearchParserRouter: IRouter = routerBuilder(organicSearchParserMockHtmlPositive);
