import { Request } from 'express';
import { paramSearchEngineIdValidator } from '@app/api/validators';
import { requestMockBuilder } from '@appTest/mocks';

const negativeTestData = [
  // The 'expected' number of errors per invalid 'searchEngineId'
  { expected: 3, searchEngineId: undefined },
  { expected: 2, searchEngineId: 0 },
  { expected: 1, searchEngineId: 1 },
  { expected: 2, searchEngineId: '' },
  { expected: 2, searchEngineId: {} },
  { expected: 2, searchEngineId: Boolean(true) },
  { expected: 2, searchEngineId: true },
  { expected: 2, searchEngineId: false },
  { expected: 2, searchEngineId: [] },
  { expected: 2, searchEngineId: ['STRING_WITHIN_INVALID_ARRAY'] },
];

describe('api', () => {
  describe('validators', () => {
    describe('paramSearchEngineIdValidator', () => {
      describe("negative: should return a non-empty 'errors' array, indicating that errors have been found", () => {
        test.each(negativeTestData)(
          "when the value of the 'searchEngineId' property within 'params' is '$searchEngineId' (from 'negativeTestData)",
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
