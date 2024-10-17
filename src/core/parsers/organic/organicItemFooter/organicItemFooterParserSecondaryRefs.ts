import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { organicItemFooterParserSecondaryRef } from './organicItemFooterParserSecondaryRef';
import {
  IHandlerOutputOrganicItemFooterSecondaryRef,
  IHandlerOutputOrganicItemFooterSecondaryRefs,
} from '@app/interfaces/core/parsers/organic/organicItemFooter';

const { elName } = organicItemFooterParserSecondaryRef;

const handler: IHandler = async ({ el }) => {
  const organicItemFooterSecondaryRefs: IHandlerOutputOrganicItemFooterSecondaryRef[] = [];

  for (let i = 0; i < (await el.count()); i++) {
    const organicItemFooterSecondaryLink = (await organicItemFooterParserSecondaryRef.parse({
      elParent: el.nth(i),
      useParent: true,
    })) as IHandlerOutputOrganicItemFooterSecondaryRef;
    organicItemFooterSecondaryRefs.push(organicItemFooterSecondaryLink);
  }

  return organicItemFooterSecondaryRefs as IHandlerOutputOrganicItemFooterSecondaryRefs;
};

export const organicItemFooterParserSecondaryRefs = parserBuilder({ elName, handler });
