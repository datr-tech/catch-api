import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputOrganicItemHeaderIcon } from 'src/interfaces/core/parsers/organic/organicItemHeader';
import { CONSTS_DOM_ORGANIC_ITEM_HEADER_ICON_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_ORGANIC_ITEM_HEADER_ICON_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.getAttribute('src')) as IHandlerOutputOrganicItemHeaderIcon;

export const organicItemHeaderParserIcon = parserBuilder({ elName, handler });
