import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { imagePackItemParserImgTextData } from '@appTest/fixtures/core/parsers/features/imagePack/imagePackItem';
import {
  imagePackItemParser,
  imagePackItemParserImg,
  imagePackItemParserImgText,
} from '@app/core/parsers/features/imagePack/imagePackItem';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackItem', () => {
          describe('imagePackItemParserImgText', () => {
            test.each(imagePackItemParserImgTextData)(
              "should return the expected text, '$textExpected', for the first imagePackItem within 'common.$name'",
              async ({ path, textExpected }) => {
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
                const textFound = (await imagePackItemParserImgText.parse({
                  elParent: imagePackItemImg,
                })) as {
                  text: string;
                };

                /*
                 * Assert
                 */
                expect(textFound).toBe(textExpected);
              },
            );
          });
        });
      });
    });
  });
});
