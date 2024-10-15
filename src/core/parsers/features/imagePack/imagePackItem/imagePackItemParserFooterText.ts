import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackItemFooterText } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';

const elName = '.Yt787';
const handler: IHandler = async ({ el }) => (await el.innerText()) as IHandlerOutputImagePackItemFooterText;

export const imagePackItemParserFooterText = parserBuilder({ elName, handler });
