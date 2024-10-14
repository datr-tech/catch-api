import { acceptCookiesHelper, loadWebsiteHelper } from '@app/core/runners/helpers';
import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';

const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/runners/helpers/acceptCookiesHelper.negative.html`;

describe('core', () => {
  describe('runners', () => {
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

              page.locator = () => {
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
