import { CONSTS_DOM_ORGANIC_ITEM_ROOT_EL } from '@app/config/consts/dom';
import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { organicItemFooterParser } from '@app/core/parsers/organic/organicItemFooter';
import { organicItemFooterParserGolfData } from '@appTest/fixtures/core/parsers/organic/organicItemFooter';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('organic', () => {
      describe('organicItemFooter', () => {
        describe('organicItemFooterParser', () => {
          describe('positive', () => {
            test(
              "should return the 'organicItemFooterExpected'",
              async () => {
                /*
                 * Arrange
                 */
                const path = 'core/parsers/common/golf.html';
                const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;
                const organicItemFooterExpected = organicItemFooterParserGolfData;

                /*
                 * Act
                 */
                const page = await loadWebsiteHelper({ url });
                const organicItem = page.locator(CONSTS_DOM_ORGANIC_ITEM_ROOT_EL).nth(2);
                const organicItemFooterFound = (await organicItemFooterParser.parse({
                  elParent: organicItem,
                })) as string;

                /*
                 * Assert
                 */
                expect(organicItemFooterFound).toEqual(organicItemFooterExpected);
              },
              20 * CONSTS_TIME_ONE_SECOND,
            );
          });
        });
      });
    });
  });
});
