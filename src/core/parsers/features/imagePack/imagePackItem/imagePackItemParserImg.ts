import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackItemImg } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';
import { imagePackItemParserImgSrc } from './imagePackItemParserImgSrc';
import { imagePackItemParserImgText } from './imagePackItemParserImgText';

const elName = '.kwICDb.DfMusf.y9pG6d.aVUpl';
const handler: IHandler = async ({ el }) =>
  ({
    src: await imagePackItemParserImgSrc.parse({ elParent: el }),
    text: await imagePackItemParserImgText.parse({ elParent: el }),
  }) as IHandlerOutputImagePackItemImg;

export const imagePackItemParserImg = parserBuilder({ elName, handler });
