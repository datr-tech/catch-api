import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackItemFooterIcon } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';
import { CONST_DOM_IMAGE_PACK_ITEM_FOOTER_ICON_ROOT_EL } from '@app/config/consts/dom';

const elName = CONST_DOM_IMAGE_PACK_ITEM_FOOTER_ICON_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.getAttribute('src')) as IHandlerOutputImagePackItemFooterIcon;

export const imagePackItemParserFooterIcon = parserBuilder({ elName, handler });
