import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { acceptCookiesHelper, enterSearchTermHelper, loadWebsiteHelper, submitHelper } from '@app/core/runners/helpers';

const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/runners/helpers/submitHelper.positive.html`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('submitHelper', () => {
        describe('positive', () => {
          describe('should return true', () => {
            test(
              "when 'url' represents a valid web page with a submit button",
              async () => {
                /*
                 * Arrange
                 */
                const searchTerm = 'MOCK_SEARCH_TERM';

                /*
                 * Act
                 */
                const page = await loadWebsiteHelper({ url });
                const hasAcceptedCookies = await acceptCookiesHelper({ page });
                const hasEnteredSearchTerm = await enterSearchTermHelper({
                  page,
                  searchTerm,
                });
                const hasBeenSubmitted = await submitHelper({ page });

                /*
                 * Assert
                 */
                expect(hasAcceptedCookies).toBe(true);
                expect(hasEnteredSearchTerm).toBe(true);
                expect(hasBeenSubmitted).toBe(true);
              },
              10 * CONSTS_TIME_ONE_SECOND,
            );
          });
        });
      });
    });
  });
});
