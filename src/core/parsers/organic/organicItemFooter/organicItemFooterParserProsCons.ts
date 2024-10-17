import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputOrganicItemHeaderIcon } from 'src/interfaces/core/parsers/organic/organicItemHeader';
import { CONSTS_DOM_ORGANIC_ITEM_FOOTER_PROS_CONS_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_ORGANIC_ITEM_FOOTER_PROS_CONS_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.innerText()) as IHandlerOutputOrganicItemHeaderIcon;

export const organicItemFooterParserProsCons = parserBuilder({ elName, handler });
