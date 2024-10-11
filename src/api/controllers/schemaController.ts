import schemaV1 from '@app/api/schemas/schema.v1.json';
import { SchemaVersionEnum } from '@app/config/enums';
import { ISchemaController } from '@app/interfaces/api/controllers';

export const schemaController: ISchemaController = ({ schemaVersion }) => {
  switch (schemaVersion) {
    case SchemaVersionEnum.v1:
      return schemaV1;
    default:
      throw new TypeError("Unknown 'schemaVersion'");
  }
};
