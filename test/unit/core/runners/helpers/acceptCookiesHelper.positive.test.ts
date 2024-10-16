import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { acceptCookiesHelper, loadWebsiteHelper } from '@app/core/runners/helpers';

const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/runners/helpers/acceptCookiesHelper.positive.html`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('acceptCookiesHelper', () => {
        describe('positive', () => {
          describe('should return true', () => {
            test("when 'url' represents a valid web page with an 'Accept all' button", async () => {

              /*
               * Arrange
               */
              const expected = true;

              /*
               * Act
               */
              const page = await loadWebsiteHelper({ url });
              const found = await acceptCookiesHelper({ page });

              /*
               * Assert
               */
              expect(found).toBe(expected);
            }, 10 * CONSTS_TIME_ONE_SECOND);
          });
        });
      });
    });
  });
});
