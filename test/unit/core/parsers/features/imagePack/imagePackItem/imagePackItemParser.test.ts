import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { imagePackItemParser } from '@app/core/parsers/features/imagePack/imagePackItem';
import { imagePackItemParserData } from '@appTest/fixtures/core/parsers/features/imagePack/imagePackItem';
import { IHandlerOutputImagePackItem } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackItem', () => {
          describe('imagePackItemParser', () => {
            test.each(imagePackItemParserData)(
              "should return the expected properties for the expectedLast imagePackItem within 'common.$name'",
              async ({ path, expectedLast }) => {

                /*
                 * Arrange
                 */
                const elName = '.p7bv.DfMusf';
                const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

                /*
                 * Act
                 */
                const page = await loadWebsiteHelper({ url });
                const imagePackItemWrapper = page.locator(elName).last();
                const found = (await imagePackItemParser.parse({
                  elParent: imagePackItemWrapper,
                })) as IHandlerOutputImagePackItem;

                /*
                 * Assert
                 */
                expect(found.footer.domain).toEqual(expectedLast.footer.domain);
                expect(found.footer.icon).toContain(expectedLast.footer.iconPrefixExpected);
                expect(found.footer.text).toEqual(expectedLast.footer.text);
                expect(found.img.src).toContain(expectedLast.img.srcPrefixExpected);
                expect(found.img.text).toEqual(expectedLast.img.text);
                expect(found.link).toEqual(expectedLast.link);
              },
            );
          });
        });
      });
    });
  });
});
