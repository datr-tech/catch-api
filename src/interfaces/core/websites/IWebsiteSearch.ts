import { IWebsiteSearchInput } from './IWebsiteSearchInput';
import { IHelperSearchOutput } from '@app/interfaces/core/websites/helpers/IHelperSearchOutput';

export interface IWebsiteSearch {
  (args: IWebsiteSearchInput): Promise<IHelperSearchOutput>;
}