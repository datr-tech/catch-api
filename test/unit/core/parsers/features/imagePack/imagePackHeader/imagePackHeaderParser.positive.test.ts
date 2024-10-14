import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { imagePackHeaderParser } from '@app/core/parsers/features/imagePack/imagePackHeader';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

const positiveTestData = [
  { name: 'australia', path: 'core/parsers/features/imagePack/imagePackFeatureParser.australian.coast.html' },
  { name: 'climbing', path: 'core/parsers/features/imagePack/imagePackFeatureParser.climbing.html' },
  { name: 'vw.golf', path: 'core/parsers/features/imagePack/imagePackFeatureParser.vw.golf.html' },
];

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackHeader', () => {
          describe('imagePackHeaderParser', () => {
            describe('positive', () => {
              test.each(positiveTestData)("should return the expected 'text' for $name", async ({ path }) => {
                // Arrange
                const textExpected = 'Images';
                const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

                // Act
                const elParent = await loadWebsiteHelper({ url });
                const { text } = (await imagePackHeaderParser.parse({ elParent })) as { text: string };

                // Assert
                expect(text).toBe(textExpected);
              });
            });
          });
        });
      });
    });
  });
});
