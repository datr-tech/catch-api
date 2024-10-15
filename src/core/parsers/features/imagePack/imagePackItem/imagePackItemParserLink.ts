import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackItemLink } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';

const elName = '.ddkIM.c30Ztd';
const handler: IHandler = async ({ el }) => (await el.getAttribute('href')) as IHandlerOutputImagePackItemLink;

export const imagePackItemParserLink = parserBuilder({ elName, handler });
