import { chromium } from 'playwright-extra';

export interface IHelperLoadWebsiteInput {
  url: string;
  chromiumLocal?: typeof chromium;
}
