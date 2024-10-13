import { IHelperAcceptCookies } from '@app/interfaces/core/websites/helpers';

export const acceptCookiesHelper: IHelperAcceptCookies = async ({ page }) => {
  const acceptAllButtonDefinition = 'button:has-text("Accept all")';
  let hasAccepted: boolean = false;

  try {
    const acceptAllButton = page.locator(acceptAllButtonDefinition);
    const hasAcceptAllButton = (await acceptAllButton.count()) > 0;

    if (hasAcceptAllButton) {
      await acceptAllButton.click();
      hasAccepted = true;
    }
  } catch (error) {
    const { message } = error;
    throw new TypeError(message);
  }

  return hasAccepted;
};
