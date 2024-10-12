import { loadWebsiteHelper } from '@app/core/websites/helpers';
import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';

describe('core', () => {
  describe('websites', () => {
    describe('helpers', () => {
      describe('loadWebsiteHelper', () => {
        describe('positive', () => {
          describe("should return a Playwright 'page' object", () => {
            test("when 'url' represents a valid (mocked) web page. Check that 'page.title()' is correct", async () => {
              // Arrange
              const titleExpected = 'loadWebsiteHelperMockHtmlPositive';
              const path = 'core/websites/helpers/loadWebsiteHelper/positive';
              const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

              // Act
              const page = await loadWebsiteHelper({ url });
              const titleFound = await page.title();

              // Assert
              expect(titleFound).toBe(titleExpected);
            });
          });
        });
      });
    });
  });
});
