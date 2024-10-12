import { acceptCookiesHelper } from '@app/core/websites/helpers/acceptCookiesHelper';
import { enterSearchTermHelper } from '@app/core/websites/helpers/enterSearchTermHelper';
import { getHtmlHelper } from '@app/core/websites/helpers/getHtmlHelper';
import { loadWebsiteHelper } from '@app/core/websites/helpers/loadWebsiteHelper';
import { submitHelper } from '@app/core/websites/helpers/submitHelper';
import { IHelperSearchSinglePage } from '@app/interfaces/core/websites/helpers';

export const searchSinglePageHelper: IHelperSearchSinglePage = async ({ searchTerm, url }) => {
  let hasSubmitted = false;
  let html = '';

  const page = await loadWebsiteHelper({ url });
  await acceptCookiesHelper({ page });
  const hasEntered = await enterSearchTermHelper({ page, searchTerm });

  if (hasEntered) {
    hasSubmitted = await submitHelper({ page });
  }

  if (hasSubmitted) {
    html = await getHtmlHelper({ page });
  }

  return html;
};
