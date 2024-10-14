import jsdom from 'jsdom';
import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { searchHelper } from '@app/core/runners/helpers';

const { JSDOM } = jsdom;
const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/runners/helpers/searchHelper.positive.html`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('searchHelper', () => {
        describe('positive', () => {
          describe('should return the HTML within an array', () => {
            test("when 'url' represents a valid web page with a submit button", async () => {
              // Arrange
              const numPages = 1;
              const searchTerm = 'MOCK_SEARCH_TERM';
              const titleExpected = 'searchHelper.positive';

              // Act
              const output = await searchHelper({ url, searchTerm, numPages });
              const html = output[0];

              // Assert
              const { document } = new JSDOM(html).window;
              const titleFound = document.title;
              expect(titleFound).toBe(titleExpected);
            });
            test("when 'url' represents a valid web page and the default value of 'numPages', 1, is used", async () => {
              // Arrange
              const searchTerm = 'MOCK_SEARCH_TERM';
              const titleExpected = 'searchHelper.positive';

              // Act
              const output = await searchHelper({ url, searchTerm });
              const html = output[0];

              // Assert
              const { document } = new JSDOM(html).window;
              const titleFound = document.title;
              expect(titleFound).toBe(titleExpected);
            });
          });
        });
      });
    });
  });
});
