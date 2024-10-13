import jsdom from 'jsdom';
import { IParserOrganic } from '@app/interfaces/core/parsers/organic';

const { JSDOM } = jsdom;

export const organicParser: IParserOrganic = ({ html }) => {
  try {
    const { document } = new JSDOM(html).window;
    const organicSearchWrapper = document.getElementsByClassName('sATSHe');
    return organicSearchWrapper.length;
  } catch (error) {
    const { message } = error;
    throw new Error(message);
  }
};
