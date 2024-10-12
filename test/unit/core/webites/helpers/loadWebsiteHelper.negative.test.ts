import { loadWebsiteHelper } from '@app/core/websites/helpers';

describe('core', () => {
  describe('websites', () => {
    describe('helpers', () => {
      describe('loadWebsiteHelper', () => {
        describe('negative', () => {
          describe('should throw an error', () => {
            test("when 'url' is invalid", async () => {
              // Arrange
              const errorExpected = 'Invalid URL';
              const url = 'INVALID_URL';

              // Act
              const handler = async () => {
                await loadWebsiteHelper({ url });
              };

              // Assert
              await expect(handler).rejects.toThrow(errorExpected);
            });
          });
        });
      });
    });
  });
});
