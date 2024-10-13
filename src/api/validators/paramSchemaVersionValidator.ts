import { param } from 'express-validator';
import { CONSTS_PARAMS_SCHEMA_VERSION } from '@app/config/consts';
import { SchemaVersionEnum } from '@app/config/enums';
import { IValidator } from '@app/interfaces/api';

export const paramSchemaVersionValidator: IValidator = param(CONSTS_PARAMS_SCHEMA_VERSION)
  .notEmpty()
  .isString()
  .trim()
  .custom((schemaVersion) => Object.keys(SchemaVersionEnum).includes(schemaVersion));
