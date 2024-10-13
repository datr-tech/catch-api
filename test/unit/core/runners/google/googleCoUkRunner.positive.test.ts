import jsdom from 'jsdom';
import { googleCoUkRunner } from '@app/core/runners/google';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts';

const { JSDOM } = jsdom;

describe('core', () => {
  describe('runners', () => {
    describe('googleCoUkRunner', () => {
      describe('positive', () => {
        test(
          'should return a positive number of searches',
          async () => {
            // Arrange
            const numPages = 1;
            const searchTerm = 'America';
            const searchWrapperClass = 'TzHB6b';

            // Act
            const output = await googleCoUkRunner.search({ searchTerm, numPages });
            const html = output[0];
            const { document } = new JSDOM(html).window;
            const searchWrappers = document.getElementsByClassName(searchWrapperClass);
            const numSearchWrappers = searchWrappers.length;

            // Assert
            expect(numSearchWrappers).toBeGreaterThan(0);
          },
          20 * CONSTS_TIME_ONE_SECOND,
        );
      });
    });
  });
});
