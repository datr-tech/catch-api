import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputPaidCarouselItem } from '@app/interfaces/core/parsers/paid/paidCarouselItem';
import { CONSTS_DOM_PAID_CAROUSEL_ITEM_ROOT_EL } from '@app/config/consts/dom';
import { paidCarouselItemBodyParser } from '@app/core/parsers/paid/paidCarousel/paidCarouselItem/paidCarouselItemBody';
import { paidCarouselItemFooterParser } from '@app/core/parsers/paid/paidCarousel/paidCarouselItem/paidCarouselItemFooter';
import { paidCarouselItemHeaderParser } from '@app/core/parsers/paid/paidCarousel/paidCarouselItem/paidCarouselItemHeader';
import { paidCarouselItemSummaryParser } from '@app/core/parsers/paid/paidCarousel/paidCarouselItem/paidCarouselItemSummary';

const elName = CONSTS_DOM_PAID_CAROUSEL_ITEM_ROOT_EL;

const handler: IHandler = async ({ el }) =>
  ({
    header: await paidCarouselItemHeaderParser.parse({ elParent: el }),
    body: await paidCarouselItemBodyParser.parse({ elParent: el }),
    footer: await paidCarouselItemFooterParser.parse({ elParent: el }),
    summary: await paidCarouselItemSummaryParser.parse({ elParent: el })
  }) as IHandlerOutputPaidCarouselItem;

export const paidCarouselItemParser = parserBuilder({ elName, handler });
