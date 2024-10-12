import { IHelperGetHtmlInput } from './IHelperGetHtmlInput';
import { IHelperGetHtmlOutput } from './IHelperGetHtmlOutput';

export interface IHelperGetHtml {
  (args: IHelperGetHtmlInput): Promise<IHelperGetHtmlOutput>;
}
