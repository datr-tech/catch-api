import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputPaidCarouselItemFooterOriginator } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemFooter';
import { CONSTS_DOM_PAID_CAROUSEL_ITEM_FOOTER_ORIGINATOR_ROOT_EL } from '@app/config/consts/dom';
import { paidCarouselItemFooterParserOriginatorLink } from './paidCarouselItemFooterParserOriginatorLink';
import { paidCarouselItemFooterParserOriginatorText } from './paidCarouselItemFooterParserOriginatorText';

const elName = CONSTS_DOM_PAID_CAROUSEL_ITEM_FOOTER_ORIGINATOR_ROOT_EL;
const handler: IHandler = async ({ el }) =>
  ({
    link: await paidCarouselItemFooterParserOriginatorLink.parse({ elParent: el }),
    text: await paidCarouselItemFooterParserOriginatorText.parse({ elParent: el }),
  }) as IHandlerOutputPaidCarouselItemFooterOriginator;

export const paidCarouselItemFooterParserOriginator = parserBuilder({ elName, handler });