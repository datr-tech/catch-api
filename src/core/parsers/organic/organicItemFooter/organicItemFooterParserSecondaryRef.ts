import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputOrganicItemFooterSecondaryRef } from '@app/interfaces/core/parsers/organic/organicItemFooter';
import { CONSTS_DOM_ORGANIC_ITEM_FOOTER_SECONDARY_REF_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_ORGANIC_ITEM_FOOTER_SECONDARY_REF_ROOT_EL;
const handler: IHandler = async ({ el }) =>
  ({
    link: await el.getAttribute('href'),
    text: await el.textContent(),
  }) as IHandlerOutputOrganicItemFooterSecondaryRef;

export const organicItemFooterParserSecondaryRef = parserBuilder({ elName, handler });
