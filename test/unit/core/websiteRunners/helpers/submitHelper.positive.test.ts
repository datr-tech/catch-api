import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';
import {
  acceptCookiesHelper,
  enterSearchTermHelper,
  loadWebsiteHelper,
  submitHelper,
} from '@app/core/websiteRunners/helpers';

describe('core', () => {
  describe('websiteRunners', () => {
    describe('helpers', () => {
      describe('submitHelper', () => {
        describe('positive', () => {
          describe('should return true', () => {
            test("when 'url' represents a valid web page with a submit button", async () => {
              // Arrange
              const searchTerm = 'MOCK_SEARCH_TERM';
              const path = 'core/websiteRunners/helpers/submitHelper/positive';
              const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

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
