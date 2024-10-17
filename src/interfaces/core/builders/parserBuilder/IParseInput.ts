import { IElementParent } from '@app/interfaces/core/builders/parserBuilder/elements';

export interface IParseInput {
  elParent: IElementParent;
  id?: number;
  useParent?: boolean;
}
