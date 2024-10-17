import { CONSTS_DOM_ORGANIC_ITEM_ROOT_EL } from '@app/config/consts/dom';
import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { organicItemHeaderParser, organicItemHeaderParserIcon } from '@app/core/parsers/organic/organicItemHeader';
import { organicItemHeaderParserIconClimbingData } from '@appTest/fixtures/core/parsers/organic/organicItemHeader';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('organic', () => {
      describe('organicItemHeader', () => {
        describe('organicItemHeaderParserIcon', () => {
          test(
            "should return 'iconExpected'",
            async () => {
              /*
               * Arrange
               */
              const iconExpected = organicItemHeaderParserIconClimbingData;
              const path = 'core/parsers/common.climbing.html';
              const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

              /*
               * Act
               */
              const page = await loadWebsiteHelper({ url });
              const organicItem = page.locator(CONSTS_DOM_ORGANIC_ITEM_ROOT_EL).nth(0);
              const organicItemHeader = organicItem.locator(organicItemHeaderParser.elName).first();
              const iconFound = (await organicItemHeaderParserIcon.parse({
                elParent: organicItemHeader,
              })) as string;

              /*
               * Assert
               */
              expect(iconFound).toEqual(iconExpected);
            },
            10 * CONSTS_TIME_ONE_SECOND,
          );
        });
      });
    });
  });
});
