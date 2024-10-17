import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { parser } from '@app/core/parsers';
import { IHandlerOutputRoot } from '@app/interfaces/core/parsers';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('parser', () => {
      describe('positive', () => {
        test(
          'should find the expected features and organic items',
          async () => {
            /*
             * Arrange
             */
            const expectedNumImagePackItems = 6;
            const expectedNumOrganicItems = 5;
            const path = 'core/parsers/common/aston.html';
            const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

            /*
             * Act
             */
            const page = await loadWebsiteHelper({ url });
            const { features, organic } = (await parser.parse({
              elParent: page,
            })) as IHandlerOutputRoot;
            const { imagePack } = features;
            const { items } = imagePack;
            const foundNumImagePackItems = items.length;
            const foundNumOrganicItems = organic.length;

            /*
             * Assert
             */
            expect(foundNumImagePackItems).toBe(expectedNumImagePackItems);
            expect(foundNumOrganicItems).toBe(expectedNumOrganicItems);
          },
          20 * CONSTS_TIME_ONE_SECOND,
        );
      });
    });
  });
});
