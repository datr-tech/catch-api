import { IHandlerOutputPaidCarouselItemBody } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemBody';
import { IHandlerOutputPaidCarouselItemHeader } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemHeader';
import { IHandlerOutputPaidCarouselItemFooter } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemFooter';
import { IHandlerOutputPaidCarouselItemSummary } from '@app/interfaces/core/parsers/paid/paidCarouselItem/paidCarouselItemSummary';

export type IHandlerOutputPaidCarouselItem = {
  header: IHandlerOutputPaidCarouselItemHeader;
  body: IHandlerOutputPaidCarouselItemBody;
  footer: IHandlerOutputPaidCarouselItemFooter;
  summary: IHandlerOutputPaidCarouselItemSummary;
};