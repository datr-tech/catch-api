import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackHeader } from '@app/interfaces/core/parsers/features/imagePack/imagePackHeader';
import { imagePackHeaderParserLink } from './imagePackHeaderParserLink';
import { imagePackHeaderParserText } from './imagePackHeaderParserText';

const elName = '.Lv2Cle .x7cRLb';
const handler: IHandler = async ({ el }) =>
  ({
    link: await imagePackHeaderParserLink.parse({ elParent: el }),
    text: await imagePackHeaderParserText.parse({ elParent: el }),
  }) as IHandlerOutputImagePackHeader;

export const imagePackHeaderParser = parserBuilder({ elName, handler });
