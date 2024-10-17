import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { imagePackItemParserFooterTextData } from '@appTest/fixtures/core/parsers/features/imagePack/imagePackItem';
import {
  imagePackItemParser,
  imagePackItemParserFooter,
  imagePackItemParserFooterText,
} from '@app/core/parsers/features/imagePack/imagePackItem';

import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackItem', () => {
          describe('imagePackItemParserFooterText', () => {
            test.each(imagePackItemParserFooterTextData)(
              "should return the expected text, '$textExpected', for the first imagePackItemFooter within 'common.$name'",
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
                const imagePackItemFooter = imagePackItem.locator(imagePackItemParserFooter.elName).first();
                const textFound = (await imagePackItemParserFooterText.parse({
                  elParent: imagePackItemFooter,
                })) as {
                  text: string;
                };

                /*
                 * Assert
                 */
                expect(textFound).toBe(textExpected);
              },
              20 * CONSTS_TIME_ONE_SECOND,
            );
          });
        });
      });
    });
  });
});
