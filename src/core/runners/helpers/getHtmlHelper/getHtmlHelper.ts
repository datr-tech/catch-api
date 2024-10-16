import { IHelperGetHtml } from '@app/interfaces/core/runners/helpers';

export const getHtmlHelper: IHelperGetHtml = async ({ page }) => {
  try {
    return await page.content();
  } catch (error) {
    const { message } = error;
    throw new TypeError(message);
  }
};
