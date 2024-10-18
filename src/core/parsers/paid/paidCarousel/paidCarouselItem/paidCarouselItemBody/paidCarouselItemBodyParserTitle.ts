import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputPaidCarouselItemBodyTitle } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemBody';
import { CONSTS_DOM_PAID_CAROUSEL_ITEM_BODY_TITLE_ROOT_EL  } from '@app/config/consts/dom';
import { paidCarouselItemBodyParserTitleLink } from './paidCarouselItemBodyParserTitleLink';
import { paidCarouselItemBodyParserTitleText } from './paidCarouselItemBodyParserTitleText';

const elName = CONSTS_DOM_PAID_CAROUSEL_ITEM_BODY_TITLE_ROOT_EL;
const handler: IHandler = async ({ el }) =>
  ({
    link: await paidCarouselItemBodyParserTitleLink.parse({ elParent: el }),
    text: await paidCarouselItemBodyParserTitleText.parse({ elParent: el })
  }) as IHandlerOutputPaidCarouselItemBodyTitle;

export const paidCarouselItemBodyParserTitle = parserBuilder({ elName, handler });