import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputPaidCarouselItemBodyPriceOriginal } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemBody';
import { CONSTS_DOM_PAID_CAROUSEL_ITEM_BODY_PRICE_ORIGINAL_ROOT_EL  } from '@app/config/consts/dom';

const elName = CONSTS_DOM_PAID_CAROUSEL_ITEM_BODY_PRICE_ORIGINAL_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.innerText()) as IHandlerOutputPaidCarouselItemBodyPriceOriginal;

export const paidCarouselItemBodyParserPriceOriginal = parserBuilder({ elName, handler });
