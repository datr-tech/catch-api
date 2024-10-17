import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { imagePackParser } from '@app/core/parsers/features/imagePack';
import { IHandlerOutputImagePack } from '@app/interfaces/core/parsers/features/imagePack';
import { imagePackItemsParserData } from '@appTest/fixtures/core/parsers/features/imagePack';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackItem', () => {
          describe('imagePackParser', () => {
            test(
              'should find the expected imagePack',
              async () => {
                /*
                 * Arrange
                 */
                const expectedNumItems = 6;
                const expectedImagePackHeaderLink = undefined;
                const path = 'core/parsers/common/aston.html';
                const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

                /*
                 * Act
                 */
                const page = await loadWebsiteHelper({ url });
                const { items, header } = (await imagePackParser.parse({
                  elParent: page,
                })) as IHandlerOutputImagePack;
                const { link } = header;
                const foundNumItems = items.length;

                /*
                 * Assert
                 */
                expect(foundNumItems).toBe(expectedNumItems);
                expect(link).toBe(expectedImagePackHeaderLink);
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
});
