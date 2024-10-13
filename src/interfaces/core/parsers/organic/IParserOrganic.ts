import { IParserOrganicInput } from './IParserOrganicInput';
import { IParserOrganicOutput } from './IParserOrganicOutput';

export interface IParserOrganic {
  (args: IParserOrganicInput): IParserOrganicOutput;
}
