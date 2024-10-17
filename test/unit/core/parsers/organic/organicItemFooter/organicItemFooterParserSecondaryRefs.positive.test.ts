import { CONSTS_DOM_ORGANIC_ITEM_ROOT_EL } from '@app/config/consts/dom';
import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { organicItemFooterParserSecondaryRefs } from '@app/core/parsers/organic/organicItemFooter';
import { organicItemFooterParserSecondaryRefsGolfData } from '@appTest/fixtures/core/parsers/organic/organicItemFooter';
import { IHandlerOutputOrganicItemFooterSecondaryRefs } from '@app/interfaces/core/parsers/organic/organicItemFooter';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('organic', () => {
      describe('organicItemFooter', () => {
        describe('organicItemFooterParserSecondaryRefs', () => {
          describe('positive', () => {
            test(
              "should return 'organicItemFooterSecondaryRefsExpected'",
              async () => {
                /*
                 * Arrange
                 */
                const path = 'core/parsers/common/golf.html';
                const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;
                const secondaryRefsExpected = organicItemFooterParserSecondaryRefsGolfData.secondaryRefs;

                /*
                 * Act
                 */
                const page = await loadWebsiteHelper({ url });
                const organicItem = page.locator(CONSTS_DOM_ORGANIC_ITEM_ROOT_EL).nth(2);
                const secondaryRefsFound = (await organicItemFooterParserSecondaryRefs.parse({
                  elParent: organicItem,
                })) as IHandlerOutputOrganicItemFooterSecondaryRefs;

                /*
                 * Assert
                 */
                expect(secondaryRefsFound).toEqual(secondaryRefsExpected);
              },
              20 * CONSTS_TIME_ONE_SECOND,
            );
          });
        });
      });
    });
  });
});
