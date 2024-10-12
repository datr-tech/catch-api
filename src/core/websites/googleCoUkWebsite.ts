import { WebsiteIdEnum } from '@app/config/enums';
import { searchHelper } from 'src/core/websites/helpers';
import { IWebsite } from '@app/interfaces/core/websites';

export const googleCoUkWebsite: IWebsite = {
  getURL: () => 'https://www.google.co.uk',
  getWebsiteId: () => WebsiteIdEnum['google.co.uk'],
  search: searchHelper,
};
