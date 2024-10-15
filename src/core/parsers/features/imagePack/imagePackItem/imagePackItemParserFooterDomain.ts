import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackItemFooterText } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';

const elName = '.LbKnXb.YAG2qc.UYJxh';
const handler: IHandler = async ({ el }) => (await el.innerText()) as IHandlerOutputImagePackItemFooterText;

export const imagePackItemParserFooterDomain = parserBuilder({ elName, handler });
