import { acceptCookiesHelper, loadWebsiteHelper } from '@app/core/websites/helpers';
import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';

const path = 'core/websites/helpers/acceptCookiesHelper/negative';
const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

describe('core', () => {
  describe('websites', () => {
    describe('helpers', () => {
      describe('acceptCookiesHelper', () => {
        describe('negative', () => {
          describe('should return false', () => {
            test("when 'url' represents a valid web page WITHOUT an 'Accept all' button", async () => {
              // Arrange
              const expected = false;

              // Act
              const page = await loadWebsiteHelper({ url });
              const found = await acceptCookiesHelper({ page });

              // Assert
              expect(found).toBe(expected);
            });
          });
          describe('should throw an error', () => {
            test("when 'page.locator' throws an error", async () => {
              // Arrange
              const errorExpected = 'Locator error';
              const page = await loadWebsiteHelper({ url });

              // Force page.locator to throw an error
              page.locator = (_el) => {
                throw new Error(errorExpected);
              };

              // Act
              const handle = async () => {
                await acceptCookiesHelper({ page });
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
