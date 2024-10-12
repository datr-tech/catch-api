import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import { assertURL } from '@app/core/assertions';
import { IHelperLoadWebsite } from '@app/interfaces/core/websites/helpers';

export const loadWebsiteHelper: IHelperLoadWebsite = async ({ url }) => {
  assertURL({ url });

  try {
    chromium.use(stealth());

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);

    return page;
  } catch (error) {
    const { message } = error;
    throw new TypeError(message);
  }
};
