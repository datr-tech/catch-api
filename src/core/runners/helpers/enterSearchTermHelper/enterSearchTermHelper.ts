import { IHelperEnterSearchTerm } from '@app/interfaces/core/runners/helpers';

export const enterSearchTermHelper: IHelperEnterSearchTerm = async ({ page, searchTerm }) => {
  try {
    const searchInputField = page.getByTitle('Search');
    const hasSearchInputField = (await searchInputField.count()) > 0;
    let hasEnteredSearchTerm = false;

    if (hasSearchInputField) {
      await searchInputField.fill(searchTerm);
      hasEnteredSearchTerm = true;
    }

    return hasEnteredSearchTerm;
  } catch (error) {
    const { message } = error;
    throw new TypeError(message);
  }
};
