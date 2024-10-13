import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import { assertURL } from '@app/core/assertions';
import { IHelperLoadWebsite } from '@app/interfaces/core/runners/helpers';

export const loadWebsiteHelper: IHelperLoadWebsite = async ({ url, chromiumLocal = chromium }) => {
  assertURL({ url });

  try {
    chromiumLocal.use(stealth());

    const browser = await chromiumLocal.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);

    return page;
  } catch (error) {
    const { message } = error;
    throw new TypeError(message);
  }
};
