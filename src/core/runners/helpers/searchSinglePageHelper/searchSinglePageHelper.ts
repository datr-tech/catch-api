import { acceptCookiesHelper } from '@app/core/runners/helpers/acceptCookiesHelper';
import { enterSearchTermHelper } from '@app/core/runners/helpers/enterSearchTermHelper';
import { getHtmlHelper } from '@app/core/runners/helpers/getHtmlHelper';
import { loadWebsiteHelper } from '@app/core/runners/helpers/loadWebsiteHelper';
import { submitHelper } from '@app/core/runners/helpers/submitHelper';
import { IHelperSearchSinglePage } from '@app/interfaces/core/runners/helpers';

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
