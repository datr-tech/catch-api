import jsdom from 'jsdom';
import { IParserOrganicSearch } from '@app/interfaces/core/parsers';

const { JSDOM } = jsdom;

export const organicSearchParser: IParserOrganicSearch = ({ html }) => {
  try {
    const { document } = new JSDOM(html).window;
    const organicSearchWrapper = document.getElementsByClassName('sATSHe');
    return organicSearchWrapper.length;
  } catch (error) {
    const { message } = error;
    throw new Error(message);
  }
};
