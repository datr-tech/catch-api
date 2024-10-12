import { IHelperSubmit } from '@app/interfaces/core/websites/helpers';

export const submitHelper: IHelperSubmit = async ({ page }) => {
  try {
    const confirmButtonDefinition = 'input:has-text("Google Search")';
    const confirmSearchButtons = page.locator(confirmButtonDefinition);
    const numConfirmSearchButtons = await confirmSearchButtons.count();
    const hasConfirmSearchButton = numConfirmSearchButtons > 0;
    let hasBeenSubmitted = false;

    if (hasConfirmSearchButton) {
      const firstConfirmSearchButton = confirmSearchButtons.nth(0);
      let firstConfirmSearchButtonVisibility = await firstConfirmSearchButton.isVisible();

      if (firstConfirmSearchButtonVisibility === false) {
        await page.waitForTimeout(1000);

        firstConfirmSearchButtonVisibility = await firstConfirmSearchButton.isVisible();
      }

      if (firstConfirmSearchButtonVisibility === true) {
        await firstConfirmSearchButton.click();
        await page.waitForTimeout(1000);
        hasBeenSubmitted = true;
      }
    }

    return hasBeenSubmitted;
  } catch (error) {
    const { message } = error;
    throw new TypeError(message);
  }
};
