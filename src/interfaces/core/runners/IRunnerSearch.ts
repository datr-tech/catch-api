import { IRunnerSearchInput } from './IRunnerSearchInput';
import { IHelperSearchOutput } from '@app/interfaces/core/runners/helpers/IHelperSearchOutput';

export interface IRunnerSearch {
  (args: IRunnerSearchInput): Promise<IHelperSearchOutput>;
}
