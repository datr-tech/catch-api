import jsdom from 'jsdom';
import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { getHtmlHelper, loadWebsiteHelper } from '@app/core/runners/helpers';

const { JSDOM } = jsdom;
const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/runners/helpers/getHtmlHelper.positive.html`;

describe('core', () => {
  describe('runners', () => {
    describe('helpers', () => {
      describe('getHtmlHelper', () => {
        describe('positive', () => {
          describe('should return the HTML content', () => {
            test(
              "when 'url' represents a valid (mocked) web page.",
              async () => {
                /*
                 * Arrange
                 */
                const titleExpected = 'getHtmlHelper.positive';

                /*
                 * Act
                 */
                await loadWebsiteHelper({ url });
                const page = await loadWebsiteHelper({ url });
                const html = await getHtmlHelper({ page });
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
