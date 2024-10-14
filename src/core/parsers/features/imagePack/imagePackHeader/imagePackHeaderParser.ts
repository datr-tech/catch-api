import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler, IHandlerOutputImagePackHeader } from '@app/interfaces/core/builders/parserBuilder';
import { imagePackHeaderParserLink } from './imagePackHeaderParserLink';
import { imagePackHeaderParserText } from './imagePackHeaderParserText';

const elName = 'div.ULSxyf';

const handler: IHandler = async ({ el }) =>
  ({
    link: await imagePackHeaderParserLink.parse({ elParent: el }),
    text: await imagePackHeaderParserText.parse({ elParent: el }),
  }) as IHandlerOutputImagePackHeader;

export const imagePackHeaderParser = parserBuilder({ elName, handler });
