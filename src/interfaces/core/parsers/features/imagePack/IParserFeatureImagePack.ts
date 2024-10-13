import { IParserFeatureImagePackInput } from './IParserFeatureImagePackInput';
import { IParserFeatureImagePackOutput } from './IParserFeatureImagePackOutput';

export interface IParserFeatureImagePack {
  (args: IParserFeatureImagePackInput): IParserFeatureImagePackOutput;
}
