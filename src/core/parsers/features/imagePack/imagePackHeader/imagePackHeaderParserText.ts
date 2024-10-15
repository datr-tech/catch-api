import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackHeaderText } from '@app/interfaces/core/parsers/features/imagePack/imagePackHeader';

const elName = '.mgAbYb.OSrXXb.RES9jf.IFnjPb';
const handler: IHandler = async ({ el }) => (await el.innerText()) as IHandlerOutputImagePackHeaderText;

export const imagePackHeaderParserText = parserBuilder({ elName, handler });
