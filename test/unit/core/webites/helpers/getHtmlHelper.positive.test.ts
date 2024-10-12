import jsdom from 'jsdom';
import { getHtmlHelper, loadWebsiteHelper } from '@app/core/websites/helpers';
import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';

const { JSDOM } = jsdom;

describe('core', () => {
  describe('websites', () => {
    describe('helpers', () => {
      describe('getHtmlHelper', () => {
        describe('positive', () => {
          describe('should return the HTML content', () => {
            test("when 'url' represents a valid (mocked) web page.", async () => {
              // Arrange
              const titleExpected = 'getHtmlHelperMockHtmlPositive';
              const path = 'core/websites/helpers/getHtmlHelper/positive';
              const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

              // Act
              const page = await loadWebsiteHelper({ url });
              const html = await getHtmlHelper({ page });
              const { document } = new JSDOM(html).window;
              const titleFound = document.title;

              // Assert
              expect(titleFound).toBe(titleExpected);
            });
          });
        });
      });
    });
  });
});
