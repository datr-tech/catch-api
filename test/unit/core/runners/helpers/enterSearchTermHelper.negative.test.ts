import { CONSTS_ROUTES_TEST_SERVER } from '@app/config/consts/routes';
import { acceptCookiesHelper, enterSearchTermHelper, loadWebsiteHelper } from '@app/core/runners/helpers';

const path = 'core/runners/helpers/enterSearchTermHelper/negative';
const url = `${CONSTS_ROUTES_TEST_SERVER}/${path}`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('enterSearchTermHelper', () => {
        describe('negative', () => {
          describe('should return false', () => {
            test("when 'url' represents a valid web page WITHOUT a 'Search' input", async () => {
              // Arrange
              const searchTerm = 'MOCK_SEARCH_TERM';

              // Act
              const page = await loadWebsiteHelper({ url });
              const hasAcceptedCookies = await acceptCookiesHelper({ page });
              const hasEnteredSearchTerm = await enterSearchTermHelper({ page, searchTerm });

              // Assert
              expect(hasAcceptedCookies).toBe(true);
              expect(hasEnteredSearchTerm).toBe(false);
            });
          });
          describe('should throw an error', () => {
            test("when 'page.getByTitle' throws an error", async () => {
              // Arrange
              const errorExpected = 'getByTitle error';
              const page = await loadWebsiteHelper({ url });
              const searchTerm = 'MOCK_SEARCH_TERM';

              page.getByTitle = () => {
                throw new Error(errorExpected);
              };

              // Act
              const handle = async () => {
                await enterSearchTermHelper({ page, searchTerm });
              };

              // Assert
              await expect(handle).rejects.toThrow(errorExpected);
            });
          });
        });
      });
    });
  });
});
