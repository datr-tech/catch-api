import jsdom from 'jsdom';
import { CONSTS_ROUTES_TEST_SERVER } from '@app/config/consts';
import { searchHelper } from '@app/core/runners/helpers';

const { JSDOM } = jsdom;
const path = 'core/runners/helpers/searchHelper/positive';
const url = `${CONSTS_ROUTES_TEST_SERVER}/${path}`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('searchHelper', () => {
        describe('positive', () => {
          describe('should return the HTML within an array', () => {
            test("when 'url' represents a valid web page with a submit button", async () => {
              // Arrange
              const numPages = 1;
              const searchTerm = 'MOCK_SEARCH_TERM';
              const titleExpected = 'searchHelper.positive';

              // Act
              const output = await searchHelper({ url, searchTerm, numPages });
              const html = output[0];

              // Assert
              const { document } = new JSDOM(html).window;
              const titleFound = document.title;
              expect(titleFound).toBe(titleExpected);
            });
            test("when 'url' represents a valid web page and the default value of 'numPages', 1, is used", async () => {
              // Arrange
              const searchTerm = 'MOCK_SEARCH_TERM';
              const titleExpected = 'searchHelper.positive';

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
