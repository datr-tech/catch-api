import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

const path = 'core/runners/helpers/loadWebsiteHelper/positive';
const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('loadWebsiteHelper', () => {
        describe('positive', () => {
          describe("should return a Playwright 'page' object", () => {
            test("when 'url' represents a valid (mocked) web page. Check that 'page.title()' is correct", async () => {
              // Arrange
              const titleExpected = 'loadWebsiteHelperMockHtmlPositive';

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
