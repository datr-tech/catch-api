import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';
import { searchSinglePageHelper } from '@app/core/runners/helpers';

const path = 'core/runners/helpers/searchSinglePageHelper/negative';
const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

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
