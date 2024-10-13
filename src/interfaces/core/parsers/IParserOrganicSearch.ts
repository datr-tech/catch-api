import { IParserOrganicSearchInput } from './IParserOrganicSearchInput';
import { IParserOrganicSearchOutput } from './IParserOrganicSearchOutput';

export interface IParserOrganicSearch {
  (args: IParserOrganicSearchInput): IParserOrganicSearchOutput;
}
