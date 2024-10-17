import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { organicItemsParser } from '@app/core/parsers/organic';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('organic', () => {
      describe('organicItems', () => {
        describe('organicItemsParser', () => {
          describe('negative', () => {
            test(
              "should return 'undefined'",
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
                const organicItemsFound = (await organicItemsParser.parse({
                  elParent: page,
                })) as string;

                /*
                 * Assert
                 */
                expect(organicItemsFound).toBeUndefined();
              },
              20 * CONSTS_TIME_ONE_SECOND,
            );
          });
        });
      });
    });
  });
});
