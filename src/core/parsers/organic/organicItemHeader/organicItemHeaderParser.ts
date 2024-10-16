import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputOrganicItemHeader } from 'src/interfaces/core/parsers/organic/organicItemHeader';
import { organicItemHeaderParserBreadcrumbs } from './organicItemHeaderParserBreadcrumbs';
import { organicItemHeaderParserDomain } from './organicItemHeaderParserDomain';
import { organicItemHeaderParserIcon } from './organicItemHeaderParserIcon';
import { organicItemHeaderParserLink } from './organicItemHeaderParserLink';
import { organicItemHeaderParserTitle } from './organicItemHeaderParserTitle';
import { CONSTS_DOM_ORGANIC_ITEM_HEADER_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_ORGANIC_ITEM_HEADER_ROOT_EL;
const handler: IHandler = async ({ el }) =>
  ({
    breadcrumbs: await organicItemHeaderParserBreadcrumbs.parse({ elParent: el }),
    domain: await organicItemHeaderParserDomain.parse({ elParent: el }),
    icon: await organicItemHeaderParserIcon.parse({ elParent: el }),
    link: await organicItemHeaderParserLink.parse({ elParent: el }),
    title: await organicItemHeaderParserTitle.parse({ elParent: el }),
  }) as IHandlerOutputOrganicItemHeader;

export const organicItemHeaderParser = parserBuilder({ elName, handler });
