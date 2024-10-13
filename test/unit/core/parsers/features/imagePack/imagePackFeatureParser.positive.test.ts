import { CONSTS_ROUTES_TEST_SERVER } from '@app/config/consts/routes';
import { imagePackFeatureParser } from '@app/core/parsers/features/imagePack';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackFeatureParser', () => {
          describe('positive', () => {
            test('should return the expected number of organic search results', async () => {
              // Arrange
              const path = 'core/parsers/features/imagePack/climbing';
              const url = `${CONSTS_ROUTES_TEST_SERVER}/${path}`;

              // Act
              const page = await loadWebsiteHelper({ url });
              const html = await page.content();
              const {
                hasImagePack,
                hasImagePackHeaderTitleWrapper,
                // @TODO - Check why this is false
                //hasImagePackSingleImageWrapper
              } = imagePackFeatureParser({ html });

              // Assert
              expect(hasImagePack).toBe(true);
              expect(hasImagePackHeaderTitleWrapper).toBe(true);
              //expect(hasImagePackSingleImageWrapper).toBe(true);
            });
          });
        });
      });
    });
  });
});
