import express from 'express';
import { CONST_PORTS_TEST_SERVER_DEFAULT } from '@app/config/consts';
import {
  acceptCookiesHelperMockHtmlNegative,
  acceptCookiesHelperMockHtmlPositive,
  enterSearchTermHelperMockHtmlNegative,
  enterSearchTermHelperMockHtmlPositive,
  getHtmlHelperMockHtmlPositive,
  loadWebsiteHelperMockHtmlPositive,
  submitHelperMockHtmlNegative,
  submitHelperMockHtmlPositive,
} from '@appTest/mocks/core/websites/helpers';
import { logger } from '@app/utils';

const app = express();
const port = CONST_PORTS_TEST_SERVER_DEFAULT;

// acceptCookiesHelper: negative
app.get('/core/websites/helpers/acceptCookiesHelper/negative', (_req, res) => {
  res.send(acceptCookiesHelperMockHtmlNegative);
});

// acceptCookiesHelper: positive
app.get('/core/websites/helpers/acceptCookiesHelper/positive', (_req, res) => {
  res.send(acceptCookiesHelperMockHtmlPositive);
});

// enterSearchTermHelper: negative
app.get('/core/websites/helpers/enterSearchTermHelper/negative', (_req, res) => {
  res.send(enterSearchTermHelperMockHtmlNegative);
});

// enterSearchTermHelper: positive
app.get('/core/websites/helpers/enterSearchTermHelper/positive', (_req, res) => {
  res.send(enterSearchTermHelperMockHtmlPositive);
});

// getHtmlHelper: positive
app.get('/core/websites/helpers/getHtmlHelper/positive', (_req, res) => {
  res.send(getHtmlHelperMockHtmlPositive);
});

// loadWebsiteHelper: positive
app.get('/core/websites/helpers/loadWebsiteHelper/positive', (_req, res) => {
  res.send(loadWebsiteHelperMockHtmlPositive);
});

// submitHelper: negative
app.get('/core/websites/helpers/submitHelper/negative', (_req, res) => {
  res.send(submitHelperMockHtmlNegative);
});

// submitHelper: positive
app.get('/core/websites/helpers/submitHelper/positive', (_req, res) => {
  res.send(submitHelperMockHtmlPositive);
});

app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
