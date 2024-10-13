import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';
import { acceptCookiesHelper, enterSearchTermHelper, loadWebsiteHelper } from '@app/core/runners/helpers';

const path = 'core/runners/helpers/enterSearchTermHelper/positive';
const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

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
