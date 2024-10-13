import { CONSTS_ROUTES_TEST_SERVER } from '@app/config/consts/routes';
import { searchSinglePageHelper } from '@app/core/runners/helpers';

const path = 'core/runners/helpers/searchSinglePageHelper/negative';
const url = `${CONSTS_ROUTES_TEST_SERVER}/${path}`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('searchSingleHelper', () => {
        describe('negative', () => {
          describe('should return an empty string', () => {
            test("when 'url' represents a web page without the required elements", async () => {
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
