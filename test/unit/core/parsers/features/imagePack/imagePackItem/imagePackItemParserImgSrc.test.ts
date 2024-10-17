import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import {
  imagePackItemParser,
  imagePackItemParserImg,
  imagePackItemParserImgSrc,
} from '@app/core/parsers/features/imagePack/imagePackItem';
import { imagePackItemParserImgSrcData } from '@appTest/fixtures/core/parsers/features/imagePack/imagePackItem';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackItem', () => {
          describe('imagePackItemParserImgSrc', () => {
            test.each(imagePackItemParserImgSrcData)(
              "should return the expected 'src' property for the first imagePackItem within 'common.$name'",
              async ({ path, srcPrefixExpected }) => {
                /*
                 * Arrange
                 */
                const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

                /*
                 * Act
                 */
                const page = await loadWebsiteHelper({ url });
                const imagePackItem = page.locator(imagePackItemParser.elName).first();
                const imagePackItemImg = imagePackItem.locator(imagePackItemParserImg.elName).first();
                const srcFound = (await imagePackItemParserImgSrc.parse({
                  elParent: imagePackItemImg,
                })) as {
                  src: string;
                };

                /*
                 * Assert
                 */
                expect(srcFound).toContain(srcPrefixExpected);
              },
            );
          });
        });
      });
    });
  });
});
