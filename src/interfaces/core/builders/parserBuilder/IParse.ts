import { IParseInput } from './IParseInput';
import { IParseOutput } from './IParseOutput';

export interface IParse {
  (args: IParseInput): Promise<IParseOutput>;
}
