import { IHandlerOutputOrganicItemBody } from '@app/interfaces/core/parsers/organic/organicItemBody';
import { IHandlerOutputOrganicItemHeader } from '@app/interfaces/core/parsers/organic/organicItemHeader';
import { IHandlerOutputOrganicItemFooter } from '@app/interfaces/core/parsers/organic/organicItemFooter';

export type IHandlerOutputOrganicItem = {
  id: number;
  body: IHandlerOutputOrganicItemBody;
  header: IHandlerOutputOrganicItemHeader;
  footer: IHandlerOutputOrganicItemFooter;
};
