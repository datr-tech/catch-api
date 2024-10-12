import { acceptCookiesHelper, loadWebsiteHelper } from '@app/core/websites/helpers';
import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';

describe('core', () => {
  describe('websites', () => {
    describe('helpers', () => {
      describe('acceptCookiesHelper', () => {
        describe('positive', () => {
          describe('should return true', () => {
            test("when 'url' represents a valid web page with an 'Accept all' button", async () => {
              // Arrange
              const expected = true;
              const path = 'core/websites/helpers/acceptCookiesHelper/positive';
              const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

              // Act
              const page = await loadWebsiteHelper({ url });
              const found = await acceptCookiesHelper({ page });

              // Assert
              expect(found).toBe(expected);
            });
          });
        });
      });
    });
  });
});
