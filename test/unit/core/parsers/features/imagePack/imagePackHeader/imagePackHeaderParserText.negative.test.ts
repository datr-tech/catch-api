import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { imagePackHeaderParserText } from '@app/core/parsers/features/imagePack/imagePackHeader';
import { imagePackHeaderParserTextDataNegative } from '@appTest/fixtures/core/parsers/features/imagePack/imagePackHeader';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackHeader', () => {
          describe('imagePackHeaderParserText', () => {
            describe('negative', () => {
              test.each(imagePackHeaderParserTextDataNegative)(
                'should return undefined for common.$name',
                async ({ path }) => {
                  /*
                   * Arrange
                   */
                  const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

                  /*
                   * Act
                   */
                  const page = await loadWebsiteHelper({ url });
                  const output = await imagePackHeaderParserText.parse({
                    elParent: page,
                  });

                  /*
                   * Assert
                   */
                  expect(output).toBeUndefined();
                },
                20 * CONSTS_TIME_ONE_SECOND,
              );
            });
          });
        });
      });
    });
  });
});
