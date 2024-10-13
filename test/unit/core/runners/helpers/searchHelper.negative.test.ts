import { CONSTS_ROUTES_TEST_SERVER } from '@app/config/consts';
import { searchHelper } from '@app/core/runners/helpers';

const path = 'core/runners/helpers/searchHelper/negative';
const url = `${CONSTS_ROUTES_TEST_SERVER}/${path}`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('searchHelper', () => {
        describe('negative', () => {
          describe('should return an array with an empty string ', () => {
            test("when 'url' represents a valid web page WITHOUT the required elements", async () => {
              // Arrange
              const htmlExpected = '';
              const numPages = 1;
              const searchTerm = 'MOCK_SEARCH_TERM';

              // Act
              const output = await searchHelper({ url, searchTerm, numPages });
              const htmlFound = output[0];

              // Assert
              expect(htmlFound).toBe(htmlExpected);
            });
          });
        });
      });
    });
  });
});
