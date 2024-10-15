import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { loadWebsiteHelper } from '@app/core/runners/helpers';
import { imagePackItemParser, imagePackItemParserLink } from '@app/core/parsers/features/imagePack/imagePackItem';
import { imagePackItemParserLinkData } from '@appTest/fixtures/core/parsers/features/imagePack/imagePackItem';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackItem', () => {
          describe('imagePackItemParserLink', () => {
            test.each(imagePackItemParserLinkData)(
              "should return the expected link, '$linkExpectedFirst', for the first imagePackItem within 'common.$name'",
              async ({ path, linkExpectedFirst }) => {
                // Arrange
                const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

                // Act
                const page = await loadWebsiteHelper({ url });
                const imagePackItem = page.locator(imagePackItemParser.elName).first();
                const linkFound = (await imagePackItemParserLink.parse({ elParent: imagePackItem })) as string;

                // Assert
                expect(linkFound).toContain(linkExpectedFirst);
              },
            );
          });
        });
      });
    });
  });
});
