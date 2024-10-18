import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputPaidCarouselItemBody } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemBody';
import { CONSTS_DOM_PAID_CAROUSEL_ITEM_BODY_ROOT_EL  } from '@app/config/consts/dom';
import { paidCarouselItemBodyParserCompany } from './paidCarouselItemBodyParserCompany';
import { paidCarouselItemBodyParserPrice } from './paidCarouselItemBodyParserPrice';
import { paidCarouselItemBodyParserTitle } from './paidCarouselItemBodyParserTitle';

const elName = CONSTS_DOM_PAID_CAROUSEL_ITEM_BODY_ROOT_EL;
const handler: IHandler = async ({ el }) =>
  ({
    company: await paidCarouselItemBodyParserCompany.parse({ elParent: el }),
    price: await paidCarouselItemBodyParserPrice.parse({ elParent: el }),
    title: await paidCarouselItemBodyParserTitle.parse({ elParent: el})
  }) as IHandlerOutputPaidCarouselItemBody;

export const paidCarouselItemBodyParser = parserBuilder({ elName, handler });