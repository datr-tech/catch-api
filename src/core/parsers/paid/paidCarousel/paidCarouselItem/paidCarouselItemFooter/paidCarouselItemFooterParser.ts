import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputPaidCarouselItemFooter } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemFooter';
import { CONSTS_DOM_PAID_CAROUSEL_ITEM_FOOTER_ROOT_EL } from '@app/config/consts/dom';
import { paidCarouselItemFooterParserDelivery } from './paidCarouselItemFooterParserDelivery';
import { paidCarouselItemFooterParserOriginator } from './paidCarouselItemFooterParserOriginator';

const elName = CONSTS_DOM_PAID_CAROUSEL_ITEM_FOOTER_ROOT_EL;
const handler: IHandler = async ({ el }) =>
  ({
    delivery: await paidCarouselItemFooterParserDelivery.parse({ elParent: el }),
    originator: await paidCarouselItemFooterParserOriginator.parse({ elParent: el })
  }) as IHandlerOutputPaidCarouselItemFooter;

export const paidCarouselItemFooterParser = parserBuilder({ elName, handler });