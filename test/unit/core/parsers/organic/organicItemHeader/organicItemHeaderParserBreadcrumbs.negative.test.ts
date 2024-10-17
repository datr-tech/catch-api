import { CONSTS_DOM_ORGANIC_ITEM_ROOT_EL } from '@app/config/consts/dom';
import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { organicItemHeaderParser, organicItemHeaderParserBreadcrumbs } from '@app/core/parsers/organic/organicItemHeader';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('organic', () => {
      describe('organicItemHeader', () => {
        describe('organicItemHeaderParserBreadcrumbs', () => {
          describe('negative', () => {
            test(
              "should return 'undefined",
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
                const organicItem = page.locator(CONSTS_DOM_ORGANIC_ITEM_ROOT_EL).nth(1);
                const organicItemHeader = organicItem.locator(organicItemHeaderParser.elName).first();
                const breadcrumbsFound = (await organicItemHeaderParserBreadcrumbs.parse({
                  elParent: organicItemHeader,
                })) as string;

                /*
                 * Assert
                 */
                expect(breadcrumbsFound).toBeUndefined();
              },
              20 * CONSTS_TIME_ONE_SECOND,
            );
          });
        });
      });
    });
  });
});
