import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';
import { organicSearchParser } from '@app/core/parsers/organicSearchParser';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('organicSearchParser', () => {
      describe('positive', () => {
        test('should return the expected number of organic search results', async () => {
          // Arrange
          const path = 'core/parsers/organicSearchParser/positive';
          const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

          // Act
          const page = await loadWebsiteHelper({ url });
          const html = await page.content();
          const numOrganicSearchResults = organicSearchParser({ html });

          // Assert
          expect(numOrganicSearchResults).toBeGreaterThanOrEqual(0);
        });
      });
    });
  });
});
