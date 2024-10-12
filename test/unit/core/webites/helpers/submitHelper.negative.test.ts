import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';
import {
  acceptCookiesHelper,
  enterSearchTermHelper,
  loadWebsiteHelper,
  submitHelper,
} from '@app/core/websites/helpers';

const searchTerm = 'MOCK_SEARCH_TERM';
const path = 'core/websites/helpers/submitHelper/negative';
const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

describe('core', () => {
  describe('websites', () => {
    describe('helpers', () => {
      describe('submitHelper', () => {
        describe('negative', () => {
          describe('should return false', () => {
            test("when 'url' represents a valid web page WITHOUT a submit button", async () => {
              // Arrange
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
              const page = await loadWebsiteHelper({ url });
              await acceptCookiesHelper({ page });
              await enterSearchTermHelper({ page, searchTerm });

              // Force page.locator to throw an error
              page.locator = () => {
                throw new Error(errorExpected);
              };
              // Act

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
