import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';
import { acceptCookiesHelper, enterSearchTermHelper, loadWebsiteHelper } from '@app/core/websites/helpers';

describe('core', () => {
  describe('websites', () => {
    describe('helpers', () => {
      describe('enterSearchTermHelper', () => {
        describe('negative', () => {
          describe('should return false', () => {
            test("when 'url' represents a valid web page WITHOUT a 'Search' input", async () => {
              // Arrange
              const searchTerm = 'MOCK_SEARCH_TERM';
              const path = 'core/websites/helpers/enterSearchTermHelper/negative';
              const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

              // Act
              const page = await loadWebsiteHelper({ url });
              const hasAcceptedCookies = await acceptCookiesHelper({ page });
              const hasEnteredSearchTerm = await enterSearchTermHelper({ page, searchTerm });

              // Assert
              expect(hasAcceptedCookies).toBe(true);
              expect(hasEnteredSearchTerm).toBe(false);
            });
          });
        });
      });
    });
  });
});
