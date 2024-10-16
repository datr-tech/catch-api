import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputOrganicItemHeaderLink } from 'src/interfaces/core/parsers/organic/organicItemHeader';
import { CONSTS_DOM_ORGANIC_ITEM_HEADER_LINK_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_ORGANIC_ITEM_HEADER_LINK_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.getAttribute('href')) as IHandlerOutputOrganicItemHeaderLink;

export const organicItemHeaderParserLink = parserBuilder({ elName, handler });
