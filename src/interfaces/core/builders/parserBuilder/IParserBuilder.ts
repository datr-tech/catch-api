import { IParserBuilderInput } from './IParserBuilderInput';
import { IParserBuilderOutput } from './IParserBuilderOutput';

export interface IParserBuilder {
  (args: IParserBuilderInput): IParserBuilderOutput;
}
