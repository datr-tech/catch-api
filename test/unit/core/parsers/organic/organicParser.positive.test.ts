import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { organicParser } from '@app/core/parsers/organic';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('organic', () => {
      describe('positive', () => {
        test('should return the expected number of organic search results', async () => {
          // Arrange
          const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/parsers/organic/organicParser.positive.html`;

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
