import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { parser } from '@app/core/parsers';
import { IHandlerOutputRoot } from '@app/interfaces/core/parsers';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('parser', () => {
      describe('negative', () => {
        test(
          "should return undefined for both the 'imagePack' and the 'organic' properties",
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
            const { features, organic } = (await parser.parse({
              elParent: page,
            })) as IHandlerOutputRoot;
            const { imagePack } = features;

            /*
             * Assert
             */
            expect(imagePack).toBeUndefined();
            expect(organic).toBeUndefined();
          },
          20 * CONSTS_TIME_ONE_SECOND,
        );
      });
    });
  });
});
