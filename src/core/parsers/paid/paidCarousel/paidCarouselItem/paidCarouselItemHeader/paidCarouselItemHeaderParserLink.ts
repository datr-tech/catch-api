import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputPaidCarouselItemHeaderLink } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemHeader';
import { CONSTS_DOM_PAID_CAROUSEL_ITEM_HEADER_LINK_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_PAID_CAROUSEL_ITEM_HEADER_LINK_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.innerText()) as IHandlerOutputPaidCarouselItemHeaderLink;

export const paidCarouselItemHeaderParserLink = parserBuilder({ elName, handler });