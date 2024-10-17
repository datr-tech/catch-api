import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputOrganicItemFooter } from 'src/interfaces/core/parsers/organic/organicItemFooter';
import { organicItemFooterParserProsCons } from './organicItemFooterParserProsCons';
import { CONSTS_DOM_ORGANIC_ITEM_FOOTER_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_ORGANIC_ITEM_FOOTER_ROOT_EL;
const handler: IHandler = async ({ el }) =>
  ({
    prosCons: await organicItemFooterParserProsCons.parse({ elParent: el }),
  }) as IHandlerOutputOrganicItemFooter;

export const organicItemFooterParser = parserBuilder({ elName, handler });
