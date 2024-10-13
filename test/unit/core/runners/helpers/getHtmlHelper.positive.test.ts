import jsdom from 'jsdom';
import { getHtmlHelper, loadWebsiteHelper } from '@app/core/runners/helpers';
import { CONSTS_ROUTES_TEST_SERVER } from '@app/config/consts/routes';

const { JSDOM } = jsdom;
const path = 'core/runners/helpers/getHtmlHelper/positive';
const url = `${CONSTS_ROUTES_TEST_SERVER}/${path}`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('getHtmlHelper', () => {
        describe('positive', () => {
          describe('should return the HTML content', () => {
            test("when 'url' represents a valid (mocked) web page.", async () => {
              // Arrange
              const titleExpected = 'getHtmlHelper.positive';

              // Act
              await loadWebsiteHelper({ url });
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
