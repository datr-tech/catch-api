import { IHelperSubmit } from '@app/interfaces/core/runners/helpers';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';

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
        await page.waitForTimeout(CONSTS_TIME_ONE_SECOND);

        firstConfirmSearchButtonVisibility = await firstConfirmSearchButton.isVisible();
      }

      if (firstConfirmSearchButtonVisibility === true) {
        await firstConfirmSearchButton.click();
        await page.waitForTimeout(CONSTS_TIME_ONE_SECOND);
        hasBeenSubmitted = true;
      }
    }

    return hasBeenSubmitted;
  } catch (error) {
    const { message } = error;
    throw new TypeError(message);
  }
};
