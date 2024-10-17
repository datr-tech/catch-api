import { CONSTS_DOM_ORGANIC_ITEM_ROOT_EL } from '@app/config/consts/dom';
import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { organicItemBodyParser } from '@app/core/parsers/organic/organicItemBody';
import { organicItemBodyParserAstonData } from '@appTest/fixtures/core/parsers/organic/organicItemHeader';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('organic', () => {
      describe('organicItemBody', () => {
        describe('organicItemBodyParser', () => {
          test(
            "should return the 'organicItemBodyExpected'",
            async () => {
              /*
               * Arrange
               */
              const path = 'core/parsers/common.aston.html';
              const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;
              const organicItemBodyExpected = organicItemBodyParserAstonData;

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
              expect(organicItemBodyFound).toEqual(organicItemBodyExpected);
            },
            10 * CONSTS_TIME_ONE_SECOND,
          );
        });
      });
    });
  });
});
