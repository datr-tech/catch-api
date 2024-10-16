import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputOrganicItem } from 'src/interfaces/core/parsers/organic';
import { organicItemHeaderParser } from '@app/core/parsers/organic/organicItemHeader';
import { organicItemBodyParser } from '@app/core/parsers/organic/organicItemBody';
import { organicItemFooterParser } from '@app/core/parsers/organic/organicItemFooter';
import { CONSTS_DOM_ORGANIC_ITEM_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_ORGANIC_ITEM_ROOT_EL;
const handler: IHandler = async ({ el, id }) =>
  ({
    id,
    body: await organicItemBodyParser.parse({ elParent: el }),
    header: await organicItemHeaderParser.parse({ elParent: el }),
    footer: (await organicItemFooterParser.parse({ elParent: el })) || undefined,
  }) as IHandlerOutputOrganicItem;

export const organicItemParser = parserBuilder({ elName, handler });
