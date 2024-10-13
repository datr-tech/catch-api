import { CONSTS_ROUTES_TEST_SERVER } from '@app/config/consts/routes';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

const path = 'core/runners/helpers/loadWebsiteHelper/positive';
const url = `${CONSTS_ROUTES_TEST_SERVER}/${path}`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('loadWebsiteHelper', () => {
        describe('positive', () => {
          describe("should return a Playwright 'page' object", () => {
            test("when 'url' represents a valid (mocked) web page. Check that 'page.title()' is correct", async () => {
              // Arrange
              const titleExpected = 'loadWebsiteHelper.positive';

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
