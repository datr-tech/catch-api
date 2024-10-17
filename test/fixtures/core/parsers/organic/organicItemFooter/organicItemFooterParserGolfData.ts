import { IHandlerOutputOrganicItemFooter } from 'src/interfaces/core/parsers/organic/organicItemFooter';
import { organicItemFooterParserSecondaryRefsGolfData } from './organicItemFooterParserSecondaryRefsGolfData';

const { secondaryRefs } = organicItemFooterParserSecondaryRefsGolfData;

export const organicItemFooterParserGolfData = {
  prosCons: undefined,
  secondaryRefs,
} as IHandlerOutputOrganicItemFooter;
