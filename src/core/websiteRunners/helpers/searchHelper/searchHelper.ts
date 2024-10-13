import { searchSinglePageHelper } from '@app/core/websiteRunners/helpers';

export const searchHelper = async ({ numPages = 1, searchTerm, url }) => {
  const html = [];

  for (let i = 0; i < numPages; i++) {
    html.push(await searchSinglePageHelper({ searchTerm, url }));
  }

  return html;
};
