import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { loadWebsiteHelper } from '@app/core/runners/helpers';
import {
  imagePackItemParser,
  imagePackItemParserFooter,
  imagePackItemParserFooterIcon,
} from '@app/core/parsers/features/imagePack/imagePackItem';
import { imagePackItemParserFooterIconData } from '@appTest/fixtures/core/parsers/features/imagePack/imagePackItem';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackItem', () => {
          describe('imagePackItemParserFooterIcon', () => {
            test.each(imagePackItemParserFooterIconData)(
              "should return the expected icon src, '$iconPrefixExpected', for the first imagePackItemFooter within 'common.$name'",
              async ({ path, iconPrefixExpected }) => {
                // Arrange
                const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

                // Act
                const page = await loadWebsiteHelper({ url });
                const imagePackItem = page.locator(imagePackItemParser.elName).first();
                const imagePackItemFooter = imagePackItem.locator(imagePackItemParserFooter.elName).first();
                const iconFound = (await imagePackItemParserFooterIcon.parse({ elParent: imagePackItemFooter })) as {
                  text: string;
                };

                // Assert
                expect(iconFound).toContain(iconPrefixExpected);
              },
            );
          });
        });
      });
    });
  });
});
