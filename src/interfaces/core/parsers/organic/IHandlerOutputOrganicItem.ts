import { IHandlerOutputOrganicItemBody } from '@app/interfaces/core/parsers/organic/organicItemBody';
import { IHandlerOutputOrganicItemHeader } from '@app/interfaces/core/parsers/organic/organicItemHeader';

export type IHandlerOutputOrganicItem = {
  body: IHandlerOutputOrganicItemBody;
  header: IHandlerOutputOrganicItemHeader;
};
