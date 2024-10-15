import { IHandlerOutputImagePackItemFooter } from './IHandlerOutputImagePackItemFooter';
import { IHandlerOutputImagePackItemImg } from './IHandlerOutputImagePackItemImg';
import { IHandlerOutputImagePackItemLink } from './IHandlerOutputImagePackItemLink';

export type IHandlerOutputImagePackItem = {
  footer: IHandlerOutputImagePackItemFooter;
  img: IHandlerOutputImagePackItemImg;
  link: IHandlerOutputImagePackItemLink;
};
