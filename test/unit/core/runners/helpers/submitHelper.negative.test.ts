import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';
import { acceptCookiesHelper, enterSearchTermHelper, loadWebsiteHelper, submitHelper } from '@app/core/runners/helpers';

const path = 'core/runners/helpers/submitHelper/negative';
const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('submitHelper', () => {
        describe('negative', () => {
          describe('should return false', () => {
            test("when 'url' represents a valid web page WITHOUT a submit button", async () => {
              // Arrange
              const searchTerm = 'MOCK_SEARCH_TERM';
              const page = await loadWebsiteHelper({ url });
              const hasAcceptedCookies = await acceptCookiesHelper({ page });
              const hasEnteredSearchTerm = await enterSearchTermHelper({ page, searchTerm });

              // Act
              const hasBeenSubmitted = await submitHelper({ page });

              // Assert
              expect(hasAcceptedCookies).toBe(true);
              expect(hasEnteredSearchTerm).toBe(true);
              expect(hasBeenSubmitted).toBe(false);
            });
          });
          describe('should throw an error', () => {
            test("when 'page.locator' throws an error", async () => {
              // Arrange
              const errorExpected = 'page.locator error';
              const searchTerm = 'MOCK_SEARCH_TERM';
              const page = await loadWebsiteHelper({ url });
              await acceptCookiesHelper({ page });
              await enterSearchTermHelper({ page, searchTerm });

              page.locator = () => {
                throw new Error(errorExpected);
              };

              // Act
              const handler = async () => {
                await submitHelper({ page });
              };

              // Assert
              await expect(handler).rejects.toThrow(errorExpected);
            });
          });
        });
      });
    });
  });
});
