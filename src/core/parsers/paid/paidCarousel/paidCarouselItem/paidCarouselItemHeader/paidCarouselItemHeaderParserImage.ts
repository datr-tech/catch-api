import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputPaidCarouselItemHeaderImage } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemHeader';
import { CONSTS_DOM_PAID_CAROUSEL_ITEM_HEADER_IMAGE_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_PAID_CAROUSEL_ITEM_HEADER_IMAGE_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.getAttribute('src')) as IHandlerOutputPaidCarouselItemHeaderImage;

export const paidCarouselItemHeaderParserImage = parserBuilder({ elName, handler });