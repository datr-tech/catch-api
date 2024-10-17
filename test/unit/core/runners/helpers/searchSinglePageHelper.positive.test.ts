import jsdom from 'jsdom';
import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { searchSinglePageHelper } from '@app/core/runners/helpers';

const { JSDOM } = jsdom;
const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/runners/helpers/searchSinglePageHelper.positive.html`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('searchSingleHelper', () => {
        describe('positive', () => {
          describe('should return the HTML', () => {
            test(
              "when 'url' represents a valid web page with a submit button",
              async () => {
                /*
                 * Arrange
                 */
                const titleExpected = 'searchSinglePageHelper.positive';
                const searchTerm = 'MOCK_SEARCH_TERM';

                /*
                 * Act
                 */
                const html = await searchSinglePageHelper({ url, searchTerm });
                const { document } = new JSDOM(html).window;
                const titleFound = document.title;

                /*
                 * Assert
                 */
                expect(titleFound).toBe(titleExpected);
              },
              10 * CONSTS_TIME_ONE_SECOND,
            );
          });
        });
      });
    });
  });
});
