import { IHelperSearchSinglePageInput } from './IHelperSearchSinglePageInput';
import { IHelperSearchSinglePageOutput } from './IHelperSearchSinglePageOutput';

export interface IHelperSearchSinglePage {
  (args: IHelperSearchSinglePageInput): Promise<IHelperSearchSinglePageOutput>;
}
