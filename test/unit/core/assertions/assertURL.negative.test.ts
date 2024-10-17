import { assertURL } from '@app/core/assertions';

const negativeTestData = [{ url: '' }, { url: ' ' }, { url: 'TEST' }, { url: 'http.TEST' }, { url: 'https://' }];

describe('core', () => {
  describe('assertions', () => {
    describe('assertURL', () => {
      describe('negative: should throw an error', () => {
        test.each(negativeTestData)(
          "when the value of the 'url' property is '$url' (from 'negativeTestData)",
          async ({ url }) => {
            /*
             * Arrange
             */
            const errorExpected = 'Invalid URL';

            /*
             * Act
             */
            const handler = () => {
              assertURL({ url });
            };

            /*
             * Assert
             */
            expect(handler).toThrow(errorExpected);
          },
        );
      });
    });
  });
});
