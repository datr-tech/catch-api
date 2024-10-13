import express from 'express';
import {
  acceptCookiesHelperRouter,
  enterSearchTermHelperRouter,
  getHtmlHelperRouter,
  imagePackFeatureParserRouter,
  loadWebsiteHelperRouter,
  organicParserRouter,
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
app.use('/core/parsers/organic/:testType', organicParserRouter);
app.use('/core/parsers/features/imagePack/:testType', imagePackFeatureParserRouter);

export { app };
