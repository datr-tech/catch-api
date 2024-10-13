import { getHtmlHelper, loadWebsiteHelper } from '@app/core/runners/helpers';
import { CONSTS_ROUTES_TEST_SERVER } from '@app/config/consts/routes';

const path = 'core/runners/helpers/getHtmlHelper/positive';
const url = `${CONSTS_ROUTES_TEST_SERVER}/${path}`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('getHtmlHelper', () => {
        describe('negative', () => {
          describe('should throw an error', () => {
            test("when 'page.content' throws an error", async () => {
              // Arrange
              const errorExpected = 'page.content error';
              const page = await loadWebsiteHelper({ url });

              page.content = () => {
                throw new Error(errorExpected);
              };

              // Act
              const handle = async () => {
                await getHtmlHelper({ page });
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
