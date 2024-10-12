import express from 'express';
import {
  acceptCookiesHelperRouter,
  enterSearchTermHelperRouter,
  getHtmlHelperRouter,
  loadWebsiteHelperRouter,
  organicSearchParserRouter,
  searchHelperRouter,
  searchSinglePageHelperRouter,
  submitHelperRouter,
} from '@appTest/server/routers';

const app = express();

// HELPERS
app.use('/core/websites/helpers/acceptCookiesHelper/:testType', acceptCookiesHelperRouter);
app.use('/core/websites/helpers/enterSearchTermHelper/:testType', enterSearchTermHelperRouter);
app.use('/core/websites/helpers/getHtmlHelper/:testType', getHtmlHelperRouter);
app.use('/core/websites/helpers/loadWebsiteHelper/:testType', loadWebsiteHelperRouter);
app.use('/core/websites/helpers/searchHelper/:testType', searchHelperRouter);
app.use('/core/websites/helpers/searchSinglePageHelper/:testType', searchSinglePageHelperRouter);
app.use('/core/websites/helpers/submitHelper/:testType', submitHelperRouter);

// PARSERS
app.use('/core/parsers/organicSearchParser/:testType', organicSearchParserRouter);

export { app };
