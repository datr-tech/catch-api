import { schemaController } from '@app/api/controllers';
import schemaV1 from '@app/api/schemas/schema.v1.json';
import { SchemaVersionEnum } from '@app/config/enums';

describe('api', () => {
  describe('controllers', () => {
    describe('schemaController', () => {
      describe('positive', () => {
        test('should return the expected schema', () => {

          /*
           * Arrange
           */
          const schemaExpected = schemaV1;
          const schemaVersion = SchemaVersionEnum.v1;

          /*
           * Act
           */
          const schemaFound = schemaController({ schemaVersion });

          /*
           * Assert
           */
          expect(schemaFound).toStrictEqual(schemaExpected);
        });
      });
    });
  });
});
