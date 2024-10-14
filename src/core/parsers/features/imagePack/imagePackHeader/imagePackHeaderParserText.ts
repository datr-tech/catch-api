import { parserBuilder } from '@app/core/builders/parserBuilder';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder';

const elName = '.Lv2Cle .mgAbYb';

const handler: IHandler = async ({ el }) => el.innerText();

export const imagePackHeaderParserText = parserBuilder({ elName, handler });
