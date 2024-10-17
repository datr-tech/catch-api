import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { featuresParser } from '@app/core/parsers/features';
import { IHandlerOutputFeatures } from '@app/interfaces/core/parsers/features';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('featuresParser', () => {
        describe('negative', () => {
          test(
            "should return '{ imagePack: undefined }'",
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
              const { imagePack } = (await featuresParser.parse({
                elParent: page,
              })) as IHandlerOutputFeatures;

              /*
               * Assert
               */
              expect(imagePack).toBeUndefined();
            },
            20 * CONSTS_TIME_ONE_SECOND,
          );
        });
      });
    });
  });
});
