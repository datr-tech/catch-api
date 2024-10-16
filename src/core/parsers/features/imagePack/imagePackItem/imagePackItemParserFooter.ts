import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackItemFooter } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';
import { imagePackItemParserFooterDomain } from './imagePackItemParserFooterDomain';
import { imagePackItemParserFooterIcon } from './imagePackItemParserFooterIcon';
import { imagePackItemParserFooterText } from './imagePackItemParserFooterText';
import { CONSTS_DOM_IMAGE_PACK_ITEM_FOOTER_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_IMAGE_PACK_ITEM_FOOTER_ROOT_EL;
const handler: IHandler = async ({ el }) =>
  ({
    domain: await imagePackItemParserFooterDomain.parse({ elParent: el }),
    icon: await imagePackItemParserFooterIcon.parse({ elParent: el }),
    text: await imagePackItemParserFooterText.parse({ elParent: el }),
  }) as IHandlerOutputImagePackItemFooter;

export const imagePackItemParserFooter = parserBuilder({ elName, handler });
