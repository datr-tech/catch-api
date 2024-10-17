import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { featuresParser } from '@app/core/parsers/features';
import { imagePackItemsParserData } from '@appTest/fixtures/core/parsers/features/imagePack';
import { IHandlerOutputFeatures } from '@app/interfaces/core/parsers/features';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('featuresParser', () => {
        describe('positive', () => {
          test(
            'should find the expected features',
            async () => {
              /*
               * Arrange
               */
              const expectedNumItems = 6;
              const path = 'core/parsers/common/aston.html';
              const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

              /*
               * Act
               */
              const page = await loadWebsiteHelper({ url });
              const { imagePack } = (await featuresParser.parse({
                elParent: page,
              })) as IHandlerOutputFeatures;
              const { items } = imagePack;
              const foundNumItems = items.length;

              /*
               * Assert
               */
              expect(foundNumItems).toBe(expectedNumItems);
              items.forEach((item, i) => {
                const linkFound = item.link;
                const linkExpected = imagePackItemsParserData[i];
                expect(linkFound).toBe(linkExpected);
              });
            },
            20 * CONSTS_TIME_ONE_SECOND,
          );
        });
      });
    });
  });
});
