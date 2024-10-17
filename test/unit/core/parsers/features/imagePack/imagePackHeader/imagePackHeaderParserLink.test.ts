import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { imagePackHeaderParser, imagePackHeaderParserLink } from '@app/core/parsers/features/imagePack/imagePackHeader';
import { imagePackParser } from '@app/core/parsers/features/imagePack';
import { loadWebsiteHelper } from '@app/core/runners/helpers';
import { imagePackHeaderParserLinkData } from '@appTest/fixtures/core/parsers/features/imagePack/imagePackHeader';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackHeader', () => {
          describe('imagePackHeaderParserLink', () => {
            describe('positive', () => {
              test.each(imagePackHeaderParserLinkData)(
                "should return 'imagePackHeaderLinkExpected' for common.$name",
                async ({ path, imagePackHeaderLinkExpected }) => {
                  /*
                   * Arrange
                   */
                  const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

                  /*
                   * Act
                   */
                  const page = await loadWebsiteHelper({ url });
                  const imagePack = page.locator(imagePackParser.elName).first();
                  const imagePackHeader = imagePack.locator(imagePackHeaderParser.elName).first();

                  const imagePackHeaderLinkFound = await imagePackHeaderParserLink.parse({
                    elParent: imagePackHeader,
                  });

                  /*
                   * Assert
                   */
                  expect(imagePackHeaderLinkFound).toEqual(imagePackHeaderLinkExpected);
                },
                20 * CONSTS_TIME_ONE_SECOND,
              );
            });
          });
        });
      });
    });
  });
});
