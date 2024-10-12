import { WebsiteIdEnum } from '@app/config/enums';
import { searchHelper } from '@app/core/websites/helpers';
import { IWebsite } from '@app/interfaces/core/websites';

const url = 'https://www.google.co.uk';

export const googleCoUkWebsite: IWebsite = {
  getURL: () => url,
  getWebsiteId: () => WebsiteIdEnum['google.co.uk'],
  search: async ({ searchTerm, numPages }) => await searchHelper({ url, searchTerm, numPages })
};
