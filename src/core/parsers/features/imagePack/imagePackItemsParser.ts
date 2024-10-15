import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { imagePackItemParser } from '@app/core/parsers/features/imagePack/imagePackItem';
import { IHandlerOutputImagePackItem } from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';

const { elName } = imagePackItemParser;

const handler: IHandler = async ({ el }) => {
  const imagePackItems: IHandlerOutputImagePackItem[] = [];

  for (let i = 0; i < (await el.count()); i++) {
    const imagePackItem = (await imagePackItemParser.parse({
      elParent: el.nth(i),
      useParent: true,
    })) as IHandlerOutputImagePackItem;

    imagePackItems.push(imagePackItem);
  }

  return imagePackItems;
};

export const imagePackItemsParser = parserBuilder({ elName, handler });
