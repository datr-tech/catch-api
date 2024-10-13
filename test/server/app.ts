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

// RUNNERS/HELPERS
app.use('/core/runners/helpers/acceptCookiesHelper/:testType', acceptCookiesHelperRouter);
app.use('/core/runners/helpers/enterSearchTermHelper/:testType', enterSearchTermHelperRouter);
app.use('/core/runners/helpers/getHtmlHelper/:testType', getHtmlHelperRouter);
app.use('/core/runners/helpers/loadWebsiteHelper/:testType', loadWebsiteHelperRouter);
app.use('/core/runners/helpers/searchHelper/:testType', searchHelperRouter);
app.use('/core/runners/helpers/searchSinglePageHelper/:testType', searchSinglePageHelperRouter);
app.use('/core/runners/helpers/submitHelper/:testType', submitHelperRouter);

// PARSERS
app.use('/core/parsers/organicSearchParser/:testType', organicSearchParserRouter);

export { app };
