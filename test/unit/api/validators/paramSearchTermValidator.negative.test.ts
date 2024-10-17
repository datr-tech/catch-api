import { Request } from 'express';
import { paramSearchTermValidator } from '@app/api/validators';
import { requestBuilder } from '@appTest/fixtures/api/validators';

const negativeTestData = [
  // The 'expected' number of errors per invalid 'searchTerm'
  { expected: 1, searchTerm: '' },
  { expected: 1, searchTerm: 0 },
  { expected: 1, searchTerm: 1 },
  { expected: 1, searchTerm: 123 },
  { expected: 1, searchTerm: {} },
  { expected: 1, searchTerm: Boolean(true) },
  { expected: 1, searchTerm: true },
  { expected: 1, searchTerm: false },
  { expected: 1, searchTerm: [] },
  { expected: 1, searchTerm: ['STRING_WITHIN_INVALID_ARRAY'] },
];

describe('api', () => {
  describe('paramValidators', () => {
    describe('paramSearchTermValidator', () => {
      describe("negative: should return a non-empty 'errors' array, indicating that errors have been found", () => {
        test.each(negativeTestData)(
          "when the value of the 'searchTerm' property within 'params' is '$searchTerm' (from 'negativeTestData)",
          async ({ expected, searchTerm }) => {
            /*
             * Arrange
             */
            const params = { searchTerm };
            const req = requestBuilder(params) as Request;

            /*
             * Act
             */
            const { context } = await paramSearchTermValidator.run(req);
            const { errors } = context;
            const found = errors.length;

            /*
             * Assert
             */
            expect(found).toBe(expected);
          },
        );
      });
    });
  });
});
