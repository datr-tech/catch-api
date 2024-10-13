import { IHelperLoadWebsiteInput } from './IHelperLoadWebsiteInput';
import { IHelperLoadWebsiteOutput } from './IHelperLoadWebsiteOutput';

export interface IHelperLoadWebsite {
  (args: IHelperLoadWebsiteInput): Promise<IHelperLoadWebsiteOutput>;
}
