import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { imagePackHeaderParser } from '@app/core/parsers/features/imagePack/imagePackHeader';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

const negativeTestData = [
  {
    linkToContain: 'aston+martin',
    path: 'core/parsers/features/imagePack/imagePackFeatureParser.aston.html',
  },
];

describe('core', () => {
  describe('parsers', () => {
    describe('features', () => {
      describe('imagePack', () => {
        describe('imagePackHeader', () => {
          describe('imagePackHeaderParser', () => {
            describe('negative', () => {
              test.each(negativeTestData)(
                "should return the expected 'link' containing $linkToContain",
                async ({ linkToContain, path }) => {
                  // Arrange
                  const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

                  // Act
                  const elParent = await loadWebsiteHelper({ url });
                  const { link } = (await imagePackHeaderParser.parse({ elParent })) as { link: string };

                  // Assert
                  expect(link).toContain(linkToContain);
                },
              );
            });
          });
        });
      });
    });
  });
});
