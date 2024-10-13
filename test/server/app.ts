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
app.use('/core/websiteRunners/helpers/acceptCookiesHelper/:testType', acceptCookiesHelperRouter);
app.use('/core/websiteRunners/helpers/enterSearchTermHelper/:testType', enterSearchTermHelperRouter);
app.use('/core/websiteRunners/helpers/getHtmlHelper/:testType', getHtmlHelperRouter);
app.use('/core/websiteRunners/helpers/loadWebsiteHelper/:testType', loadWebsiteHelperRouter);
app.use('/core/websiteRunners/helpers/searchHelper/:testType', searchHelperRouter);
app.use('/core/websiteRunners/helpers/searchSinglePageHelper/:testType', searchSinglePageHelperRouter);
app.use('/core/websiteRunners/helpers/submitHelper/:testType', submitHelperRouter);

// PARSERS
app.use('/core/parsers/organicSearchParser/:testType', organicSearchParserRouter);

export { app };
