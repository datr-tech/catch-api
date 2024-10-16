import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackItemFooterText } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';
import { CONSTS_DOM_IMAGE_PACK_ITEM_FOOTER_TEXT_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_IMAGE_PACK_ITEM_FOOTER_TEXT_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.innerText()) as IHandlerOutputImagePackItemFooterText;

export const imagePackItemParserFooterText = parserBuilder({ elName, handler });
