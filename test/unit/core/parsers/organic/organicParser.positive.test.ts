import { CONSTS_ROUTES_TEST_SERVER } from '@app/config/consts/routes';
import { organicParser } from '@app/core/parsers/organic';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('organic', () => {
      describe('positive', () => {
        test('should return the expected number of organic search results', async () => {
          // Arrange
          const path = 'core/parsers/organic/positive';
          const url = `${CONSTS_ROUTES_TEST_SERVER}/${path}`;

          // Act
          const page = await loadWebsiteHelper({ url });
          const html = await page.content();
          const numOrganicSearchResults = organicParser({ html });

          // Assert
          expect(numOrganicSearchResults).toBeGreaterThanOrEqual(0);
        });
      });
    });
  });
});
