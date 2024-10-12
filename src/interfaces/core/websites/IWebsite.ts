import { IHelperGetURL } from '@app/interfaces/core/websites/helpers';
import { IHelperGetWebsiteId } from '@app/interfaces/core/websites/helpers';
import { IHelperSearch } from '@app/interfaces/core/websites/helpers';

export interface IWebsite {
  getURL: IHelperGetURL;
  getWebsiteId: IHelperGetWebsiteId;
  search: IHelperSearch;
}
