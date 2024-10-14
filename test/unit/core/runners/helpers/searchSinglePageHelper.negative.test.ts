import { searchSinglePageHelper } from '@app/core/runners/helpers';
import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';

const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/runners/helpers/searchSinglePageHelper.negative.html`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('searchSingleHelper', () => {
        describe('negative', () => {
          describe('should return an empty string', () => {
            test("when 'url' represents a web page without the required common", async () => {
              // Arrange
              const htmlExpected = '';
              const searchTerm = 'MOCK_SEARCH_TERM';

              // Act
              const htmlFound = await searchSinglePageHelper({ url, searchTerm });

              // Assert
              expect(htmlFound).toBe(htmlExpected);
            });
          });
        });
      });
    });
  });
});
