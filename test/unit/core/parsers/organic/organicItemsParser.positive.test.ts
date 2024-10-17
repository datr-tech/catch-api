import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { organicItemsParser } from '@app/core/parsers/organic';
import { organicItemsParserData } from '@appTest/fixtures/core/parsers/organic';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('organic', () => {
      describe('organicItems', () => {
        describe('organicItemsParser', () => {
          describe('positive', () => {
            test.each(organicItemsParserData)(
              "should return the expected number of organicItems from within 'common.$name'",
              async ({ path, numOrganicItemsExpected }) => {
                /*
                 * Arrange
                 */
                const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

                /*
                 * Act
                 */
                const page = await loadWebsiteHelper({ url });
                const organicItemsFound = (await organicItemsParser.parse({
                  elParent: page,
                })) as string;
                const numOrganicItemsFound = organicItemsFound.length;

                /*
                 * Assert
                 */
                expect(numOrganicItemsFound).toEqual(numOrganicItemsExpected);
              },
              20 * CONSTS_TIME_ONE_SECOND,
            );
          });
        });
      });
    });
  });
});
