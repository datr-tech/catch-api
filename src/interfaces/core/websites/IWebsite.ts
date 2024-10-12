import { IHelperGetURL } from '@app/interfaces/core/websites/helpers';
import { IHelperGetWebsiteId } from '@app/interfaces/core/websites/helpers';
import { IWebsiteSearch } from './IWebsiteSearch';

export interface IWebsite {
  getURL: IHelperGetURL;
  getWebsiteId: IHelperGetWebsiteId;
  search: IWebsiteSearch;
}
