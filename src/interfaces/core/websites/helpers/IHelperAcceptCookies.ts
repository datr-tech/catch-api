import { IHelperAcceptCookiesInput } from './IHelperAcceptCookiesInput';
import { IHelperAcceptCookiesOutput } from './IHelperAcceptCookiesOutput';

export interface IHelperAcceptCookies {
  (args: IHelperAcceptCookiesInput): Promise<IHelperAcceptCookiesOutput>;
}
