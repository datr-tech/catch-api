import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { loadWebsiteHelper } from '@app/core/runners/helpers';
import { imagePackParser } from '@app/core/parsers/features/imagePack';
import { IHandlerOutputImagePack } from '@app/interfaces/core/parsers/features/imagePack';
import { imagePackItemsParserData } from '@appTest/fixtures/core/parsers/features/imagePack';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackItem', () => {
          describe('imagePackParser', () => {
            test('should find the expected imagePack', async () => {
              // Arrange
              const expectedNumItems = 6;
              const path = 'core/parsers/features/imagePack/common.aston.html';
              const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

              // Act
              const page = await loadWebsiteHelper({ url });
              const { items } = (await imagePackParser.parse({ elParent: page })) as IHandlerOutputImagePack;
              const foundNumItems = items.length;

              // Assert
              expect(foundNumItems).toBe(expectedNumItems);

              items.forEach((item, i) => {
                const linkFound = item.link;
                const linkExpected = imagePackItemsParserData[i];
                expect(linkFound).toBe(linkExpected);
              });
            });
          });
        });
      });
    });
  });
});
