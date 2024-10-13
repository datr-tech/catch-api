import { WebsiteIdEnum } from '@app/config/enums';
import { searchHelper } from '@app/core/runners/helpers';
import { IRunner } from '@app/interfaces/core/runners';

const url = 'https://www.google.co.uk';

export const googleCoUkRunner: IRunner = {
  getURL: () => url,
  getWebsiteId: () => WebsiteIdEnum['google.co.uk'],
  search: async ({ searchTerm, numPages }) => await searchHelper({ url, searchTerm, numPages }),
};
