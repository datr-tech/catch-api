import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackItemImgSrc } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';
import { CONST_DOM_IMAGE_PACK_ITEM_IMG_SRC_ROOT_EL } from '@app/config/consts/dom';

const elName = CONST_DOM_IMAGE_PACK_ITEM_IMG_SRC_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.getAttribute('src')) as IHandlerOutputImagePackItemImgSrc;

export const imagePackItemParserImgSrc = parserBuilder({ elName, handler });
