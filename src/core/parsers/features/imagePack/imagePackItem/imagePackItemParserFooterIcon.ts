import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackItemFooterIcon } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';

const elName = '.oRVWZ.GB3ilc.Vwoesf img';
const handler: IHandler = async ({ el }) => (await el.getAttribute('src')) as IHandlerOutputImagePackItemFooterIcon;

export const imagePackItemParserFooterIcon = parserBuilder({ elName, handler });
