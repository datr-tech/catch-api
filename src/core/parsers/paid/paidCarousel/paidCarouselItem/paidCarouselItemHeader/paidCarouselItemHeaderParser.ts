import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputPaidCarouselItemHeader } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemHeader';
import { CONSTS_DOM_PAID_CAROUSEL_ITEM_HEADER_ROOT_EL  } from '@app/config/consts/dom';
import { paidCarouselItemHeaderParserBanner } from './paidCarouselItemHeaderParserBanner';
import { paidCarouselItemHeaderParserImage } from './paidCarouselItemHeaderParserImage';
import { paidCarouselItemHeaderParserLink } from './paidCarouselItemHeaderParserLink';

const elName = CONSTS_DOM_PAID_CAROUSEL_ITEM_HEADER_ROOT_EL;
const handler: IHandler = async ({ el }) =>
  ({
    banner: await paidCarouselItemHeaderParserBanner.parse({ elParent: el }),
    image: await paidCarouselItemHeaderParserLink.parse({ elParent: el}),
    link: await paidCarouselItemHeaderParserImage.parse({ elParent: el })
  }) as IHandlerOutputPaidCarouselItemHeader;

export const paidCarouselItemHeaderParser = parserBuilder({ elName, handler });