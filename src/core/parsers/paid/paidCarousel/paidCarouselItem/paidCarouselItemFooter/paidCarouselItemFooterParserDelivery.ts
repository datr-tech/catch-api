import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputPaidCarouselItemFooterDelivery } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemFooter';
import { CONSTS_DOM_PAID_CAROUSEL_ITEM_FOOTER_DELIVERY_ROOT_EL  } from '@app/config/consts/dom';

const elName = CONSTS_DOM_PAID_CAROUSEL_ITEM_FOOTER_DELIVERY_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.innerText()) as IHandlerOutputPaidCarouselItemFooterDelivery;

export const paidCarouselItemFooterParserDelivery = parserBuilder({ elName, handler });