import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/runners/helpers/loadWebsiteHelper.positive.html`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('loadWebsiteHelper', () => {
        describe('positive', () => {
          describe("should return a Playwright 'page' object", () => {
            test("when 'url' represents a valid (mocked) web page. Check that 'page.title()' is correct", async () => {

              /*
               * Arrange
               */
              const titleExpected = 'loadWebsiteHelper.positive';

              /*
               * Act
               */
              const page = await loadWebsiteHelper({ url });
              const titleFound = await page.title();

              /*
               * Assert
               */
              expect(titleFound).toBe(titleExpected);
            }, 10 * CONSTS_TIME_ONE_SECOND);
          });
        });
      });
    });
  });
});
