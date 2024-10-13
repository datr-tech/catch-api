import { Request } from 'express';
import { paramSchemaVersionValidator } from '@app/api/validators';
import { requestBuilder } from '@appTest/fixtures/api/validators';

const positiveTestData = [
  // The 'expected' number of errors per valid 'schemaVersion'
  { expected: 0, schemaVersion: 'v1' },
];

describe('api', () => {
  describe('paramValidators', () => {
    describe('paramSchemaVersionValidator', () => {
      describe("positive: should return an empty 'errors' array, indicating that no errors have been found", () => {
        test.each(positiveTestData)(
          "when the value of the 'schemaVersion' property within 'params' is '$schemaVersion' (from 'positiveTestData)",
          async ({ expected, schemaVersion }) => {
            // Arrange
            const params = { schemaVersion };
            const req = requestBuilder(params) as Request;

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
