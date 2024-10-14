import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { acceptCookiesHelper, enterSearchTermHelper, loadWebsiteHelper } from '@app/core/runners/helpers';

const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/runners/helpers/enterSearchTermHelper.positive.html`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('enterSearchTermHelper', () => {
        describe('positive', () => {
          describe('should return true', () => {
            test("when 'url' represents a valid web page with a 'Search' input", async () => {
              // Arrange
              const searchTerm = 'MOCK_SEARCH_TERM';

              // Act
              const page = await loadWebsiteHelper({ url });
              const hasAcceptedCookies = await acceptCookiesHelper({ page });
              const hasEnteredSearchTerm = await enterSearchTermHelper({ page, searchTerm });

              // Assert
              expect(hasAcceptedCookies).toBe(true);
              expect(hasEnteredSearchTerm).toBe(true);
            });
          });
        });
      });
    });
  });
});
