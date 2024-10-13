import jsdom from 'jsdom';
import { CONSTS_ROUTES_TEST_SERVER } from '@app/config/consts/routes';
import { searchSinglePageHelper } from '@app/core/runners/helpers';

const { JSDOM } = jsdom;
const path = 'core/runners/helpers/searchSinglePageHelper/positive';
const url = `${CONSTS_ROUTES_TEST_SERVER}/${path}`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('searchSingleHelper', () => {
        describe('positive', () => {
          describe('should return the HTML', () => {
            test("when 'url' represents a valid web page with a submit button", async () => {
              // Arrange
              const titleExpected = 'searchSinglePageHelper.positive';
              const searchTerm = 'MOCK_SEARCH_TERM';

              // Act
              const html = await searchSinglePageHelper({ url, searchTerm });

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
