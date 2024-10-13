import jsdom from 'jsdom';
import { getHtmlHelper, loadWebsiteHelper } from '@app/core/runners/helpers';
import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';

const { JSDOM } = jsdom;
const path = 'core/runners/helpers/getHtmlHelper/positive';
const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('getHtmlHelper', () => {
        describe('positive', () => {
          describe('should return the HTML content', () => {
            test("when 'url' represents a valid (mocked) web page.", async () => {
              // Arrange
              const titleExpected = 'getHtmlHelperMockHtmlPositive';

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
