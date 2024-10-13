import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';
import { acceptCookiesHelper, loadWebsiteHelper } from '@app/core/runners/helpers';

const path = 'core/runners/helpers/acceptCookiesHelper/positive';
const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('acceptCookiesHelper', () => {
        describe('positive', () => {
          describe('should return true', () => {
            test("when 'url' represents a valid web page with an 'Accept all' button", async () => {
              // Arrange
              const expected = true;

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
