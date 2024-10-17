import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { imagePackItemParser, imagePackItemParserImg } from '@app/core/parsers/features/imagePack/imagePackItem';
import { imagePackItemParserImgData } from '@appTest/fixtures/core/parsers/features/imagePack/imagePackItem';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackItem', () => {
          describe('imagePackItemParserImgSrc', () => {
            test.each(imagePackItemParserImgData)(
              "should return the expected 'src' and 'text' property for the last imagePackItem within 'common.$name'",
              async ({ path, srcPrefixExpected, textExpected }) => {
                /*
                 * Arrange
                 */
                const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

                /*
                 * Act
                 */
                const page = await loadWebsiteHelper({ url });
                const imagePackItem = page.locator(imagePackItemParser.elName).last();
                const { src, text } = (await imagePackItemParserImg.parse({
                  elParent: imagePackItem,
                })) as {
                  src: string;
                  text: string;
                };

                /*
                 * Assert
                 */
                expect(src).toContain(srcPrefixExpected);
                expect(text).toEqual(textExpected);
              },
            );
          });
        });
      });
    });
  });
});
