import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackHeader } from '@app/interfaces/core/parsers/features/imagePack/imagePackHeader';
import { imagePackHeaderParserLink } from './imagePackHeaderParserLink';
import { imagePackHeaderParserText } from './imagePackHeaderParserText';
import { CONST_DOM_IMAGE_PACK_HEADER_ROOT_EL } from '@app/config/consts/dom';

const elName = CONST_DOM_IMAGE_PACK_HEADER_ROOT_EL;
const handler: IHandler = async ({ el }) =>
  ({
    link: await imagePackHeaderParserLink.parse({ elParent: el }),
    text: await imagePackHeaderParserText.parse({ elParent: el }),
  }) as IHandlerOutputImagePackHeader;

export const imagePackHeaderParser = parserBuilder({ elName, handler });
