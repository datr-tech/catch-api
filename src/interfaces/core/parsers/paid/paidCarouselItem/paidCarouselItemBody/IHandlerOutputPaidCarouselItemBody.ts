import { IHandlerOutputPaidCarouselItemBodyCompany } from './IHandlerOutputPaidCarouselItemBodyCompany';
import { IHandlerOutputPaidCarouselItemBodyPrice } from './IHandlerOutputPaidCarouselItemBodyPrice';
import { IHandlerOutputPaidCarouselItemBodyTitle } from './IHandlerOutputPaidCarouselItemBodyTitle';

export type IHandlerOutputPaidCarouselItemBody = {
  company: IHandlerOutputPaidCarouselItemBodyCompany;
  price: IHandlerOutputPaidCarouselItemBodyPrice;
  title: IHandlerOutputPaidCarouselItemBodyTitle;
};