import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';
import { searchSinglePageHelper } from '@app/core/websiteRunners/helpers';

describe('core', () => {
  describe('websiteRunners', () => {
    describe('helpers', () => {
      describe('searchSingleHelper', () => {
        describe('negative', () => {
          describe('should return an empty string', () => {
            test("when 'url' represents a web page without the required elements", async () => {
              // Arrange
              const htmlExpected = '';
              const searchTerm = 'MOCK_SEARCH_TERM';
              const path = 'core/websiteRunners/helpers/searchSinglePageHelper/negative';
              const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

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
