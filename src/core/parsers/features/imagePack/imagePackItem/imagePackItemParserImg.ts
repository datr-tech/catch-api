import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackItemImg } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';
import { imagePackItemParserImgSrc } from './imagePackItemParserImgSrc';
import { imagePackItemParserImgText } from './imagePackItemParserImgText';
import { CONSTS_DOM_IMAGE_PACK_ITEM_IMG_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_IMAGE_PACK_ITEM_IMG_ROOT_EL;
const handler: IHandler = async ({ el }) =>
  ({
    src: await imagePackItemParserImgSrc.parse({ elParent: el }),
    text: await imagePackItemParserImgText.parse({ elParent: el }),
  }) as IHandlerOutputImagePackItemImg;

export const imagePackItemParserImg = parserBuilder({ elName, handler });
