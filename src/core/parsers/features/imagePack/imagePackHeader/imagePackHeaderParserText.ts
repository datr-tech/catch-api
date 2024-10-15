import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackHeaderText } from '@app/interfaces/core/parsers/features/imagePack/imagePackHeader';
import { CONST_DOM_IMAGE_PACK_HEADER_TEXT_ROOT_EL } from '@app/config/consts/dom';

const elName = CONST_DOM_IMAGE_PACK_HEADER_TEXT_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.innerText()) as IHandlerOutputImagePackHeaderText;

export const imagePackHeaderParserText = parserBuilder({ elName, handler });
