import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputImagePackItemLink } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';
import { CONST_DOM_IMAGE_PACK_ITEM_LINK_ROOT_EL } from '@app/config/consts/dom';

const elName = CONST_DOM_IMAGE_PACK_ITEM_LINK_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.getAttribute('href')) as IHandlerOutputImagePackItemLink;

export const imagePackItemParserLink = parserBuilder({ elName, handler });
