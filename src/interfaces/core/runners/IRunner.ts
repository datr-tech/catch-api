import { IHelperGetURL } from '@app/interfaces/core/runners/helpers';
import { IHelperGetWebsiteId } from '@app/interfaces/core/runners/helpers';
import { IRunnerSearch } from './IRunnerSearch';

export interface IRunner {
  getURL: IHelperGetURL;
  getWebsiteId: IHelperGetWebsiteId;
  search: IRunnerSearch;
}
