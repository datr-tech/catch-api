import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputPaidCarouselItemBodyPrice } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemBody';
import { CONSTS_DOM_PAID_CAROUSEL_ITEM_BODY_PRICE_ROOT_EL  } from '@app/config/consts/dom';
import { paidCarouselItemBodyParserPriceOriginal } from './paidCarouseltemBodyParserPriceOriginal';
import { paidCarouselItemBodyParserPriceValue } from './paidCarouseltemBodyParserPriceValue';

const elName = CONSTS_DOM_PAID_CAROUSEL_ITEM_BODY_PRICE_ROOT_EL;
const handler: IHandler = async ({ el }) =>
  ({
    original: await paidCarouselItemBodyParserPriceOriginal.parse({ elParent: el }),
    value: await paidCarouselItemBodyParserPriceValue.parse({ elParent: el })
  }) as IHandlerOutputPaidCarouselItemBodyPrice;

export const paidCarouselItemBodyParserPrice = parserBuilder({ elName, handler });