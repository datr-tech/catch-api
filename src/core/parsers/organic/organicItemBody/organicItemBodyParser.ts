import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputOrganicItemBody } from 'src/interfaces/core/parsers/organic/organicItemBody';
import { CONSTS_DOM_ORGANIC_ITEM_BODY_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_ORGANIC_ITEM_BODY_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.innerText()) as IHandlerOutputOrganicItemBody;

export const organicItemBodyParser = parserBuilder({ elName, handler });
