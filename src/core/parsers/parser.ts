import { CONSTS_DOM_COMMON_ROOT_EL } from '@app/config/consts/dom';
import { featuresParser } from '@app/core/parsers/features';
import { organicItemsParser } from '@app/core/parsers/organic';
import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputRoot } from '@app/interfaces/core/parsers';
import { IHandlerOutputFeatures } from '@app/interfaces/core/parsers/features';
import { IHandlerOutputOrganicItems } from '@app/interfaces/core/parsers/organic';

const elName = CONSTS_DOM_COMMON_ROOT_EL;
const handler: IHandler = async ({ el }) =>
  ({
    features: (await featuresParser.parse({ elParent: el })) as IHandlerOutputFeatures,
    organic: (await organicItemsParser.parse({ elParent: el })) as IHandlerOutputOrganicItems,
  }) as IHandlerOutputRoot;

export const parser = parserBuilder({ elName, handler });
