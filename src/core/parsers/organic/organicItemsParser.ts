import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { organicItemParser } from '@app/core/parsers/organic';
import { IHandlerOutputOrganicItem, IHandlerOutputOrganicItems } from '@app/interfaces/core/parsers/organic';

const { elName } = organicItemParser;

const handler: IHandler = async ({ el }) => {
  const organicItems: IHandlerOutputOrganicItem[] = [];

  for (let i = 0; i < (await el.count()); i++) {
    const organicItem = (await organicItemParser.parse({
      elParent: el.nth(i),
      useParent: true,
    })) as IHandlerOutputOrganicItem;

    organicItems.push(organicItem);
  }

  return organicItems as IHandlerOutputOrganicItems;
};

export const organicItemsParser = parserBuilder({ elName, handler });
