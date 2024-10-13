import jsdom from 'jsdom';
import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';
import { searchSinglePageHelper } from '@app/core/websiteRunners/helpers';

const { JSDOM } = jsdom;

describe('core', () => {
  describe('websiteRunners', () => {
    describe('helpers', () => {
      describe('searchSingleHelper', () => {
        describe('positive', () => {
          describe('should return the HTML', () => {
            test("when 'url' represents a valid web page with a submit button", async () => {
              // Arrange
              const titleExpected = 'searchSinglePageHelperMockHtmlPositive';
              const searchTerm = 'MOCK_SEARCH_TERM';
              const path = 'core/websiteRunners/helpers/searchSinglePageHelper/positive';
              const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

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
