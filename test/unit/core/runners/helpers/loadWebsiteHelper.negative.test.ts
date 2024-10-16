import { chromium } from 'playwright-extra';
import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('loadWebsiteHelper', () => {
        describe('negative', () => {
          describe('should throw an error', () => {
            test("when 'url' is invalid", async () => {

              /*
               * Arrange
               */
              const errorExpected = 'Invalid URL';
              const url = 'INVALID_URL';

              /*
               * Act
               */
              const handler = async () => {
                await loadWebsiteHelper({ url });
              };

              /*
               * Assert
               */
              await expect(handler).rejects.toThrow(errorExpected);
            }, 10 * CONSTS_TIME_ONE_SECOND);
            test("when 'chromium.use' throws an error", async () => {

              /*
               * Arrange
               */
              const errorExpected = 'chromium.use error';
              const chromiumLocal = {
                use: () => {
                  throw new Error(errorExpected);
                },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
              } as any as typeof chromium;

              // NOTE: the 'positive' HTML is being used below
              const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/runners/helpers/loadWebsiteHelper.positive.html`;

              /*
               * Act
               */
              const handler = async () => {
                await loadWebsiteHelper({ url, chromiumLocal });
              };

              /*
               * Assert
               */
              await expect(handler).rejects.toThrow(errorExpected);
            }, 10 * CONSTS_TIME_ONE_SECOND);
          });
        });
      });
    });
  });
});
