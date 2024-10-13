import jsdom from 'jsdom';
import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';
import { searchHelper } from '@app/core/websiteRunners/helpers';

const { JSDOM } = jsdom;
const searchTerm = 'MOCK_SEARCH_TERM';
const titleExpected = 'searchHelperMockHtmlPositive';
const path = 'core/websiteRunners/helpers/searchHelper/positive';
const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

describe('core', () => {
  describe('websiteRunners', () => {
    describe('helpers', () => {
      describe('searchHelper', () => {
        describe('positive', () => {
          describe('should return the HTML within an array', () => {
            test("when 'url' represents a valid web page with a submit button", async () => {
              // Arrange
              const numPages = 1;

              // Act
              const output = await searchHelper({ url, searchTerm, numPages });
              const html = output[0];

              // Assert
              const { document } = new JSDOM(html).window;
              const titleFound = document.title;
              expect(titleFound).toBe(titleExpected);
            });
            test("when 'url' represents a valid web page and the default value of 'numPages', 1, is used", async () => {
              // Act
              const output = await searchHelper({ url, searchTerm });
              const html = output[0];

              // Assert
              const { document } = new JSDOM(html).window;
              const titleFound = document.title;
              expect(titleFound).toBe(titleExpected);
            });
          });
        });
      });
    });
  });
});
