import { Request } from 'express';
import { paramWebsiteIdValidator } from '@app/api/validators';
import { requestBuilder } from '@appTest/fixtures/api/validators';

const positiveTestData = [
  // The 'expected' number of errors per valid 'searchEngine' param
  { expected: 0, websiteId: '1' },
];

describe('api', () => {
  describe('paramValidators', () => {
    describe('paramWebsiteIdValidator', () => {
      describe("positive: should return an empty 'errors' array, indicating that no errors have been found", () => {
        test.each(positiveTestData)(
          "when the value of the 'websiteId' property within 'params' is '$websiteId' (from 'positiveTestData)",
          async ({ expected, websiteId }) => {
            // Arrange
            const params = { websiteId };
            const req = requestBuilder(params) as Request;

            // Act
            const { context } = await paramWebsiteIdValidator.run(req);
            const { errors } = context;
            const found = errors.length;

            // Assert
            expect(found).toBe(expected);
          },
        );
      });
    });
  });
});
