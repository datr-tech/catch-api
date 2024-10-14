import { IHandlerOutputImagePackHeader } from './IHandlerOutputImagePackHeader';
import { IHandlerOutputImagePackHeaderLink } from './IHandlerOutputImagePackHeaderLink';
import { IHandlerOutputImagePackHeaderText } from './IHandlerOutputImagePackHeaderText';

export type IHandlerOutput =
  | IHandlerOutputImagePackHeader
  | IHandlerOutputImagePackHeaderLink
  | IHandlerOutputImagePackHeaderText;
