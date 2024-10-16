import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackHeaderLink } from '@app/interfaces/core/parsers/features/imagePack/imagePackHeader';
import { CONSTS_DOM_IMAGE_PACK_HEADER_LINK_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_IMAGE_PACK_HEADER_LINK_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.getAttribute('href')) as IHandlerOutputImagePackHeaderLink;

export const imagePackHeaderParserLink = parserBuilder({ elName, handler });
