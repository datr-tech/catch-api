import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackItem } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';
import { imagePackItemParserFooter } from './imagePackItemParserFooter';
import { imagePackItemParserImg } from './imagePackItemParserImg';
import { imagePackItemParserLink } from './imagePackItemParserLink';

const elName = '.w43QB.EXH1Ce';
const handler: IHandler = async ({ el }) =>
  ({
    footer: await imagePackItemParserFooter.parse({ elParent: el }),
    img: await imagePackItemParserImg.parse({ elParent: el }),
    link: await imagePackItemParserLink.parse({ elParent: el }),
  }) as IHandlerOutputImagePackItem;

export const imagePackItemParser = parserBuilder({ elName, handler });
