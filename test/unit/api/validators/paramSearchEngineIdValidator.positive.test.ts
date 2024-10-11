import { Request } from 'express';
import { paramSearchEngineIdValidator } from '@app/api/validators';
import { requestMockBuilder } from '@appTest/mocks';

const positiveTestData = [
  // The 'expected' number of errors per valid 'searchEngine' param
  { expected: 0, searchEngineId: '1' },
];

describe('api', () => {
  describe('paramValidators', () => {
    describe('paramSearchEngineIdValidator', () => {
      describe("positive: should return an empty 'errors' array, indicating that no errors have been found", () => {
        test.each(positiveTestData)(
          "when the value of the 'searchEngineId' property within 'params' is '$searchEngineId' (from 'positiveTestData)",
          async ({ expected, searchEngineId }) => {
            // Arrange
            const params = { searchEngineId };
            const req = requestMockBuilder(params) as Request;

            // Act
            const { context } = await paramSearchEngineIdValidator.run(req);
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
