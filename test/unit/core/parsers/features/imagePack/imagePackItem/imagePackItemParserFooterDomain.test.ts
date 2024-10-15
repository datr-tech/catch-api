import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { loadWebsiteHelper } from '@app/core/runners/helpers';
import { imagePackItemParserFooterDomainData } from '@appTest/fixtures/core/parsers/features/imagePack/imagePackItem';
import {
  imagePackItemParser,
  imagePackItemParserFooter,
  imagePackItemParserFooterDomain,
} from '@app/core/parsers/features/imagePack/imagePackItem';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackItem', () => {
          describe('imagePackItemParserFooterDomain', () => {
            test.each(imagePackItemParserFooterDomainData)(
              "should return the expected domain, '$domainExpectedFirst', for the FIRST imagePackItemFooter within 'common.$name'",
              async ({ path, domainExpectedFirst }) => {
                // Arrange
                const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

                // Act
                const page = await loadWebsiteHelper({ url });
                const imagePackItem = page.locator(imagePackItemParser.elName).first();
                const imagePackItemFooter = imagePackItem.locator(imagePackItemParserFooter.elName).first();
                const domainFound = (await imagePackItemParserFooterDomain.parse({
                  elParent: imagePackItemFooter,
                })) as {
                  text: string;
                };

                // Assert
                expect(domainFound).toContain(domainExpectedFirst);
              },
            );
          });
        });
      });
    });
  });
});
