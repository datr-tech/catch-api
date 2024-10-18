import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputPaidCarouselItemBodyCompany } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemBody';
import { CONSTS_DOM_PAID_CAROUSEL_ITEM_BODY_COMPANY_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_PAID_CAROUSEL_ITEM_BODY_COMPANY_ROOT_EL;
const handler: IHandler = async ({ el }) => (await el.innerText()) as IHandlerOutputPaidCarouselItemBodyCompany;

export const paidCarouselItemBodyParserCompany = parserBuilder({ elName, handler });
