import { ISchemaControllerInput } from './ISchemaControllerInput';
import { ISchemaControllerOutput } from './ISchemaControllerOutput';

export interface ISchemaController {
  (args: ISchemaControllerInput): ISchemaControllerOutput;
}
