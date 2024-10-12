import { Request } from 'express';
import { paramSchemaVersionValidator } from '@app/api/validators';
import { requestMockBuilder } from '@appTest/mocks/api/validators';

const negativeTestData = [
  // The 'expected' number of errors per invalid 'schemaVersion'
  { expected: 3, schemaVersion: undefined },
  { expected: 2, schemaVersion: 0 },
  { expected: 2, schemaVersion: 1 },
  { expected: 1, schemaVersion: 'v2' },
  { expected: 2, schemaVersion: '' },
  { expected: 2, schemaVersion: {} },
  { expected: 2, schemaVersion: Boolean(true) },
  { expected: 2, schemaVersion: true },
  { expected: 2, schemaVersion: false },
  { expected: 2, schemaVersion: [] },
  { expected: 2, schemaVersion: ['STRING_WITHIN_INVALID_ARRAY'] },
];

describe('api', () => {
  describe('validators', () => {
    describe('paramSchemaVersionValidator', () => {
      describe("negative: should return a non-empty 'errors' array, indicating that errors have been found", () => {
        test.each(negativeTestData)(
          "when the value of the 'schemaVersion' property within 'params' is '$schemaVersion' (from 'negativeTestData)",
          async ({ expected, schemaVersion }) => {
            // Arrange
            const params = { schemaVersion };
            const req = requestMockBuilder(params) as Request;

            // Act
            const { context } = await paramSchemaVersionValidator.run(req);
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
