import { CONSTS_ROUTES_TEST_SERVER } from '@app/config/consts/routes';
import { acceptCookiesHelper, enterSearchTermHelper, loadWebsiteHelper, submitHelper } from '@app/core/runners/helpers';

const path = 'core/runners/helpers/submitHelper/positive';
const url = `${CONSTS_ROUTES_TEST_SERVER}/${path}`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('submitHelper', () => {
        describe('positive', () => {
          describe('should return true', () => {
            test("when 'url' represents a valid web page with a submit button", async () => {
              // Arrange
              const searchTerm = 'MOCK_SEARCH_TERM';

              // Act
              const page = await loadWebsiteHelper({ url });
              const hasAcceptedCookies = await acceptCookiesHelper({ page });
              const hasEnteredSearchTerm = await enterSearchTermHelper({ page, searchTerm });
              const hasBeenSubmitted = await submitHelper({ page });

              // Assert
              expect(hasAcceptedCookies).toBe(true);
              expect(hasEnteredSearchTerm).toBe(true);
              expect(hasBeenSubmitted).toBe(true);
            });
          });
        });
      });
    });
  });
});
