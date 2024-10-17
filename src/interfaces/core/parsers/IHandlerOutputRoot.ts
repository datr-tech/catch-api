import { IHandlerOutputFeatures } from '@app/interfaces/core/parsers/features';
import { IHandlerOutputOrganicItems } from '@app/interfaces/core/parsers/organic';

export interface IHandlerOutputRoot {
  features: IHandlerOutputFeatures;
  organic: IHandlerOutputOrganicItems;
}
