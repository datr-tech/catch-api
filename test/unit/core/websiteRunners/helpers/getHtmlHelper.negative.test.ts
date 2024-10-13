import { getHtmlHelper, loadWebsiteHelper } from '@app/core/websiteRunners/helpers';
import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';

describe('core', () => {
  describe('websiteRunners', () => {
    describe('helpers', () => {
      describe('getHtmlHelper', () => {
        describe('negative', () => {
          describe('should throw an error', () => {
            test("when 'page.content' throws an error", async () => {
              // Arrange
              const errorExpected = 'page.content error';
              const path = 'core/websiteRunners/helpers/getHtmlHelper/positive';
              const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;
              const page = await loadWebsiteHelper({ url });

              // Force page.getByTitle to throw an error
              page.content = () => {
                throw new Error(errorExpected);
              };

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
