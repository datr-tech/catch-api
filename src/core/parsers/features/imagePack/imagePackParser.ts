import { parserBuilder } from '@app/core/builders/parserBuilder';
import { imagePackHeaderParser } from '@app/core/parsers/features/imagePack/imagePackHeader';
import { imagePackItemsParser } from './imagePackItemsParser';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackHeader } from '@app/interfaces/core/parsers/features/imagePack/imagePackHeader';
import { IHandlerOutputImagePack, IHandlerOutputImagePackItems } from '@app/interfaces/core/parsers/features/imagePack';

const elName = 'div.ULSxyf';

const handler: IHandler = async ({ el }) =>
  ({
    header: (await imagePackHeaderParser.parse({ elParent: el })) as IHandlerOutputImagePackHeader,
    items: (await imagePackItemsParser.parse({ elParent: el })) as IHandlerOutputImagePackItems,
  }) as IHandlerOutputImagePack;

export const imagePackParser = parserBuilder({ elName, handler });
