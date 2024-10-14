import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { getHtmlHelper, loadWebsiteHelper } from '@app/core/runners/helpers';

const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/runners/helpers/getHtmlHelper.positive.html`;

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
