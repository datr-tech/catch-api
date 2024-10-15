import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackItemImgText } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';

const elName = 'img';
const handler: IHandler = async ({ el }) => (await el.getAttribute('alt')) as IHandlerOutputImagePackItemImgText;

export const imagePackItemParserImgText = parserBuilder({ elName, handler });
