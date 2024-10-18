import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputPaidCarouselItemSummary } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemSummary';
import { CONSTS_DOM_PAID_CAROUSEL_ITEM_SUMMARY_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_PAID_CAROUSEL_ITEM_SUMMARY_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.innerText()) as IHandlerOutputPaidCarouselItemSummary;

export const paidCarouselItemSummaryParser = parserBuilder({ elName, handler });