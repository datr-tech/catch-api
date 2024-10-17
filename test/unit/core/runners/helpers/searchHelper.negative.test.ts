import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { searchHelper } from '@app/core/runners/helpers';

const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/runners/helpers/searchHelper.negative.html`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('searchHelper', () => {
        describe('negative', () => {
          describe('should return an array with an empty string ', () => {
            test(
              "when 'url' represents a valid web page WITHOUT the required common",
              async () => {
                /*
                 * Arrange
                 */
                const htmlExpected = '';
                const numPages = 1;
                const searchTerm = 'MOCK_SEARCH_TERM';

                /*
                 * Act
                 */
                const output = await searchHelper({
                  url,
                  searchTerm,
                  numPages,
                });
                const htmlFound = output[0];

                /*
                 * Assert
                 */
                expect(htmlFound).toBe(htmlExpected);
              },
              10 * CONSTS_TIME_ONE_SECOND,
            );
          });
        });
      });
    });
  });
});
