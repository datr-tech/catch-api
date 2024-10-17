import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { imagePackHeaderParser, imagePackHeaderParserText } from '@app/core/parsers/features/imagePack/imagePackHeader';
import { imagePackHeaderParserTextDataPositive } from '@appTest/fixtures/core/parsers/features/imagePack/imagePackHeader';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackHeader', () => {
          describe('imagePackHeaderParserText', () => {
            describe('positive', () => {
              test.each(imagePackHeaderParserTextDataPositive)("should return 'textExpected' for common.$name", async ({ path }) => {
                /*
                 * Arrange
                 */
                const textExpected = 'Images';
                const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

                /*
                 * Act
                 */
                const page = await loadWebsiteHelper({ url });
                const imagePackHeader = page.locator(imagePackHeaderParser.elName).first();
                const textFound = await imagePackHeaderParserText.parse({
                  elParent: imagePackHeader,
                });

                /*
                 * Assert
                 */
                expect(textFound).toBe(textExpected);
              });
            });
          });
        });
      });
    });
  });
});
