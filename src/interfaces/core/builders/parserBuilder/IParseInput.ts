import { IElementParent } from '@app/interfaces/core/builders/parserBuilder/elements';

export interface IParseInput {
  elParent: IElementParent;
  useParent?: boolean;
}
