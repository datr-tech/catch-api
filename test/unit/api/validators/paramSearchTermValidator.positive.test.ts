import { Request } from 'express';
import { paramSearchTermValidator } from '@app/api/validators';
import { requestMockBuilder } from '@appTest/mocks';

const positiveTestData = [
  // The 'expected' number of errors per valid 'searchTerm' param
  { expected: 0, searchTerm: 'ABC' },
  { expected: 0, searchTerm: 'abc' },
  { expected: 0, searchTerm: ' abc ' },
  { expected: 0, searchTerm: 'abc' },
  { expected: 0, searchTerm: '*&^' },
];

describe('api', () => {
  describe('paramValidators', () => {
    describe('paramSearchTermValidator', () => {
      describe("positive: should return an empty 'errors' array, indicating that no errors have been found", () => {
        test.each(positiveTestData)(
          "when the value of the 'searchTerm' property within 'params' is '$searchTerm' (from 'positiveTestData)",
          async ({ expected, searchTerm }) => {
            // Arrange
            const params = { searchTerm };
            const req = requestMockBuilder(params) as Request;

            // Act
            const { context } = await paramSearchTermValidator.run(req);
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
