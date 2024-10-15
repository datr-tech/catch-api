import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackItemImgSrc } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';

const elName = 'img';
const handler: IHandler = async ({ el }) => (await el.getAttribute('src')) as IHandlerOutputImagePackItemImgSrc;

export const imagePackItemParserImgSrc = parserBuilder({ elName, handler });
