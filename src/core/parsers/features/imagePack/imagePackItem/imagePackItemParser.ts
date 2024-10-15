import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackItem } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';
import { imagePackItemParserFooter } from './imagePackItemParserFooter';
import { imagePackItemParserImg } from './imagePackItemParserImg';
import { imagePackItemParserLink } from './imagePackItemParserLink';
import { CONST_DOM_IMAGE_PACK_ITEM_ROOT_EL } from '@app/config/consts/dom';

const elName = CONST_DOM_IMAGE_PACK_ITEM_ROOT_EL;
const handler: IHandler = async ({ el }) =>
  ({
    footer: await imagePackItemParserFooter.parse({ elParent: el }),
    img: await imagePackItemParserImg.parse({ elParent: el }),
    link: await imagePackItemParserLink.parse({ elParent: el }),
  }) as IHandlerOutputImagePackItem;

export const imagePackItemParser = parserBuilder({ elName, handler });
