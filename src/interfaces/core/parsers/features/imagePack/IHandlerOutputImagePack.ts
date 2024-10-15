import { IHandlerOutputImagePackItems } from './IHandlerOutputImagePackItems';
import { IHandlerOutputImagePackHeader } from '@app/interfaces/core/parsers/features/imagePack/imagePackHeader';

export type IHandlerOutputImagePack = {
  header: IHandlerOutputImagePackHeader;
  items: IHandlerOutputImagePackItems;
};
