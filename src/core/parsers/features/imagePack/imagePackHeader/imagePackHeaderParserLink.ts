import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackHeaderLink } from '@app/interfaces/core/parsers/features/imagePack/imagePackHeader';

const elName = 'a';
const handler: IHandler = async ({ el }) => (await el.getAttribute('href')) as IHandlerOutputImagePackHeaderLink;

export const imagePackHeaderParserLink = parserBuilder({ elName, handler });
