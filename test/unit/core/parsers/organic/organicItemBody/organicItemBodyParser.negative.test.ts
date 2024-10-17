import { CONSTS_DOM_ORGANIC_ITEM_ROOT_EL } from '@app/config/consts/dom';
import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { organicItemBodyParser } from '@app/core/parsers/organic/organicItemBody';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('organic', () => {
      describe('organicItemBody', () => {
        describe('organicItemBodyParser', () => {
          describe('negative', () => {
            test(
              "should return the 'undefined'",
              async () => {
                /*
                 * Arrange
                 */
                const path = 'core/parsers/common/negative.html';
                const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

                /*
                 * Act
                 */
                const page = await loadWebsiteHelper({ url });
                const organicItem = page.locator(CONSTS_DOM_ORGANIC_ITEM_ROOT_EL).first();
                const organicItemBodyFound = (await organicItemBodyParser.parse({
                  elParent: organicItem,
                })) as string;

                /*
                 * Assert
                 */
                expect(organicItemBodyFound).toBeUndefined();
              },
              20 * CONSTS_TIME_ONE_SECOND,
            );
          });
        });
      });
    });
  });
});
