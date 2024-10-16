import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { imagePackParser, imagePackItemsParser } from '@app/core/parsers/features/imagePack';
import { imagePackItemsParserData } from '@appTest/fixtures/core/parsers/features/imagePack';
import { IHandlerOutputImagePackItems } from '@app/interfaces/core/parsers/features/imagePack';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackItem', () => {
          describe('imagePackItemsParser', () => {
            test('should find the expected number of imagePack items: 6', async () => {

              /*
               * Arrange
               */
              const expectedNumItems = 6;
              const path = 'core/parsers/common.aston.html';
              const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

              /*
               * Act
               */
              const page = await loadWebsiteHelper({ url });
              const elParent = page.locator(imagePackParser.elName);
              const imagePackItems = (await imagePackItemsParser.parse({ elParent })) as IHandlerOutputImagePackItems;
              const foundNumItems = imagePackItems.length;

              /*
               * Assert
               */
              expect(foundNumItems).toBe(expectedNumItems);
              imagePackItems.forEach((imagePackItem, i) => {
                const linkFound = imagePackItem.link;
                const linkExpected = imagePackItemsParserData[i];
                expect(linkFound).toBe(linkExpected);
              });
            }, 20 * CONSTS_TIME_ONE_SECOND);
          });
        });
      });
    });
  });
});
