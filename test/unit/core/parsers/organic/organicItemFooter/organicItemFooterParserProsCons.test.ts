import { CONSTS_DOM_ORGANIC_ITEM_ROOT_EL } from '@app/config/consts/dom';
import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { organicItemFooterParserProsCons } from '@app/core/parsers/organic/organicItemFooter';
import { organicItemFooterParserGolfData } from '@appTest/fixtures/core/parsers/organic/organicItemFooter';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('organic', () => {
      describe('organicItemFooter', () => {
        describe('organicItemFooterParserProsCons', () => {
          test(
            "should return the 'organicItemFooterProsConsExpected'",
            async () => {
              /*
               * Arrange
               */
              const path = 'core/parsers/common.golf.html';
              const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;
              const organicItemFooterProsConsExpected = organicItemFooterParserGolfData.prosCons;

              /*
               * Act
               */
              const page = await loadWebsiteHelper({ url });
              const organicItem = page.locator(CONSTS_DOM_ORGANIC_ITEM_ROOT_EL).first();
              const organicItemFooterProsConsFound = (await organicItemFooterParserProsCons.parse({
                elParent: organicItem,
              })) as string;

              /*
               * Assert
               */
              expect(organicItemFooterProsConsFound).toEqual(organicItemFooterProsConsExpected);
            },
            10 * CONSTS_TIME_ONE_SECOND,
          );
        });
      });
    });
  });
});
