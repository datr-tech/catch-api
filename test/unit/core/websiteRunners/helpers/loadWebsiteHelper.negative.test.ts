import { chromium } from 'playwright-extra';
import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';
import { loadWebsiteHelper } from '@app/core/websiteRunners/helpers';

describe('core', () => {
  describe('websiteRunners', () => {
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
            test("when 'chromium.use' throws an error", async () => {
              // Arrange
              const errorExpected = 'chromium.use error';
              const chromiumLocal = {
                use: () => {
                  throw new Error(errorExpected);
                },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
              } as any as typeof chromium;

              const path = 'core/websiteRunners/helpers/loadWebsiteHelper/positive';
              const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

              // Act
              const handler = async () => {
                await loadWebsiteHelper({ url, chromiumLocal });
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
