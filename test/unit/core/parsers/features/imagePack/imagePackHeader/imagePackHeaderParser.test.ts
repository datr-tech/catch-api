import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { imagePackHeaderParser } from '@app/core/parsers/features/imagePack/imagePackHeader';
import { loadWebsiteHelper } from '@app/core/runners/helpers';
import { imagePackHeaderParserData } from '@appTest/fixtures/core/parsers/features/imagePack/imagePackHeader';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackHeader', () => {
          describe('imagePackHeaderParser', () => {
            test.each(imagePackHeaderParserData)("should return 'textExpected' for common.$name", async ({ path }) => {

              /*
               * Arrange
               */
              const textExpected = 'Images';
              const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

              /*
               * Act
               */
              const page = await loadWebsiteHelper({ url });
              const { text } = (await imagePackHeaderParser.parse({ elParent: page })) as { text: string };

              /*
               * Assert
               */
              expect(text).toBe(textExpected);
            }, 20 * CONSTS_TIME_ONE_SECOND);
          });
        });
      });
    });
  });
});
