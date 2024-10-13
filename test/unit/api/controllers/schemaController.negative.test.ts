import { schemaController } from '@app/api/controllers';
import { SchemaVersionEnum } from '@app/config/enums';

describe('api', () => {
  describe('controllers', () => {
    describe('schemaController', () => {
      describe('negative', () => {
        test("should throw an error when receiving an unknown value for 'schemaVersion'", () => {
          // Arrange
          const errorExpected = "Unknown 'schemaVersion'";
          const schemaVersion = SchemaVersionEnum.UNKNOWN;
          // Act

          const handler = () => {
            schemaController({ schemaVersion });
          };
          // Assert
          expect(handler).toThrow(errorExpected);
        });
      });
    });
  });
});
