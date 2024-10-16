import { CONSTS_DOM_ORGANIC_ITEM_ROOT_EL } from '@app/config/consts/dom';
import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { organicItemHeaderParser, organicItemHeaderParserDomain } from '@app/core/parsers/organic/organicItemHeader';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('organic', () => {
      describe('organicItemHeader', () => {
        describe('organicItemHeaderParserDomain', () => {
          describe('positive', () => {
            test(
              "should return 'domainExpected'",
              async () => {
                /*
                 * Arrange
                 */
                const domainExpected = 'Wikipedia';
                const path = 'core/parsers/common/coast.html';
                const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

                /*
                 * Act
                 */
                const page = await loadWebsiteHelper({ url });
                const organicItem = page.locator(CONSTS_DOM_ORGANIC_ITEM_ROOT_EL).first();
                const organicItemHeader = organicItem.locator(organicItemHeaderParser.elName).first();
                const domainFound = (await organicItemHeaderParserDomain.parse({
                  elParent: organicItemHeader,
                })) as string;

                /*
                 * Assert
                 */
                expect(domainFound).toEqual(domainExpected);
              },
              20 * CONSTS_TIME_ONE_SECOND,
            );
          });
        });
      });
    });
  });
});
