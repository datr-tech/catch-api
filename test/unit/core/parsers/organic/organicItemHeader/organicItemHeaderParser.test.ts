import { CONSTS_DOM_ORGANIC_ITEM_ROOT_EL } from '@app/config/consts/dom';
import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { organicItemHeaderParser } from '@app/core/parsers/organic/organicItemHeader';
import { organicItemHeaderParserAstonData } from '@appTest/fixtures/core/parsers/organic/organicItemHeader';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('organic', () => {
      describe('organicItemHeader', () => {
        describe('organicItemHeaderParser', () => {
          test(
            "should return the 'organicItemHeaderExpected'",
            async () => {
              /*
               * Arrange
               */
              const path = 'core/parsers/common.aston.html';
              const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;
              const organicItemHeaderExpected = organicItemHeaderParserAstonData;

              /*
               * Act
               */
              const page = await loadWebsiteHelper({ url });
              const organicItem = page.locator(CONSTS_DOM_ORGANIC_ITEM_ROOT_EL).nth(1);
              const organicItemHeaderFound = (await organicItemHeaderParser.parse({
                elParent: organicItem,
              })) as string;

              /*
               * Assert
               */
              expect(organicItemHeaderFound).toEqual(organicItemHeaderExpected);
            },
            10 * CONSTS_TIME_ONE_SECOND,
          );
        });
      });
    });
  });
});
