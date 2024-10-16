import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputOrganicItemHeaderLink } from 'src/interfaces/core/parsers/organic/organicItemHeader';
import { CONSTS_DOM_ORGANIC_ITEM_HEADER_TITLE_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_ORGANIC_ITEM_HEADER_TITLE_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.innerText()) as IHandlerOutputOrganicItemHeaderLink;

export const organicItemHeaderParserTitle = parserBuilder({ elName, handler });
