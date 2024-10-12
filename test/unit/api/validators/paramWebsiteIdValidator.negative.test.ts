import { Request } from 'express';
import { paramWebsiteIdValidator } from '@app/api/validators';
import { requestMockBuilder } from '@appTest/mocks/api/validators';

const negativeTestData = [
  // The 'expected' number of errors per invalid 'websiteId'
  { expected: 3, websiteId: undefined },
  { expected: 2, websiteId: 0 },
  { expected: 1, websiteId: 1 },
  { expected: 2, websiteId: '' },
  { expected: 2, websiteId: {} },
  { expected: 2, websiteId: Boolean(true) },
  { expected: 2, websiteId: true },
  { expected: 2, websiteId: false },
  { expected: 2, websiteId: [] },
  { expected: 2, websiteId: ['STRING_WITHIN_INVALID_ARRAY'] },
];

describe('api', () => {
  describe('validators', () => {
    describe('paramWebsiteIdValidator', () => {
      describe("negative: should return a non-empty 'errors' array, indicating that errors have been found", () => {
        test.each(negativeTestData)(
          "when the value of the 'websiteId' property within 'params' is '$websiteId' (from 'negativeTestData)",
          async ({ expected, websiteId }) => {
            // Arrange
            const params = { websiteId };
            const req = requestMockBuilder(params) as Request;

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
