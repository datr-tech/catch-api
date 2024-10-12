import { IHelperSearchInput } from './IHelperSearchInput';
import { IHelperSearchOutput } from './IHelperSearchOutput';

export interface IHelperSearch {
  (args: IHelperSearchInput): Promise<IHelperSearchOutput>;
}
