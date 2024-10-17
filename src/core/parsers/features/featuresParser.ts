import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';
import { IHandlerOutputFeatures } from 'src/interfaces/core/parsers/features';
import { imagePackParser } from '@app/core/parsers/features/imagePack';
import { CONSTS_DOM_FEATURES_ROOT_EL } from '@app/config/consts/dom';

const elName = CONSTS_DOM_FEATURES_ROOT_EL;
const handler: IHandler = async ({ el }) =>
  ({
    imagePack: await imagePackParser.parse({ elParent: el }),
  }) as IHandlerOutputFeatures;

export const featuresParser = parserBuilder({ elName, handler });
