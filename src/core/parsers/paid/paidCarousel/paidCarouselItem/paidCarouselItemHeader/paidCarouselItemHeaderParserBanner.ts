import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputPaidCarouselItemHeaderBanner } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemHeader';
import { CONSTS_DOM_PAID_CAROUSEL_ITEM_HEADER_BANNER_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_PAID_CAROUSEL_ITEM_HEADER_BANNER_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.innerText()) as IHandlerOutputPaidCarouselItemHeaderBanner;

export const paidCarouselItemHeaderParserBanner = parserBuilder({ elName, handler });