import { IParse, IParserBuilder } from '@app/interfaces/core/builders/parserBuilder';
import { IElementCurrent } from '@app/interfaces/core/builders/parserBuilder/elements';

export const parserBuilder: IParserBuilder = ({ elName, handler }) => {
  if (!elName) {
    throw new TypeError("'elName' must be a non-empty string");
  }

  const parse: IParse = async ({ elParent, useParent = false }) => {
    const el: IElementCurrent = useParent ? (elParent as IElementCurrent) : elParent.locator(elName);

    const hasElementBeenFound = (await el.count()) > 0;

    return hasElementBeenFound ? await handler({ el }) : undefined;
  };

  return { parse, elName };
};
