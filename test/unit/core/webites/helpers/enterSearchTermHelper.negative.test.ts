import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';
import { acceptCookiesHelper, enterSearchTermHelper, loadWebsiteHelper } from '@app/core/websites/helpers';

const searchTerm = 'MOCK_SEARCH_TERM';
const path = 'core/websites/helpers/enterSearchTermHelper/negative';
const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

describe('core', () => {
  describe('websites', () => {
    describe('helpers', () => {
      describe('enterSearchTermHelper', () => {
        describe('negative', () => {
          describe('should return false', () => {
            test("when 'url' represents a valid web page WITHOUT a 'Search' input", async () => {
              // Arrange

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

              // Force page.getByTitle to throw an error
              page.getByTitle = () => {
                throw new Error(errorExpected);
              };

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
