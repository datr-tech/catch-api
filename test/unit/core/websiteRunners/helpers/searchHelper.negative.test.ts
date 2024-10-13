import { CONST_ROUTES_MOCK_SERVER } from '@app/config/consts';
import { searchHelper } from '@app/core/websiteRunners/helpers';

const searchTerm = 'MOCK_SEARCH_TERM';
const path = 'core/websiteRunners/helpers/searchHelper/negative';
const url = `${CONST_ROUTES_MOCK_SERVER}/${path}`;

describe('core', () => {
  describe('websiteRunners', () => {
    describe('helpers', () => {
      describe('searchHelper', () => {
        describe('negative', () => {
          describe('should return an array with an empty string ', () => {
            test("when 'url' represents a valid web page WITHOUT the required elements", async () => {
              // Arrange
              const htmlExpected = '';
              const numPages = 1;

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
