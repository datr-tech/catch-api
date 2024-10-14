import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder';

const elName = 'a.O7G3Gd';

const handler: IHandler = async ({ el }) => el.getAttribute('href');

export const imagePackHeaderParserLink = parserBuilder({ elName, handler });
