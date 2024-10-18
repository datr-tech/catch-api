import { CONSTS_DOM_PAID_CAROUSEL_ROOT_EL } from '@app/config/consts/dom';
import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { CONSTS_TIME_ONE_SECOND } from '@app/config/consts/time';
import { paidCarouselItemParser } from '@app/core/parsers/paid/paidCarousel/paidCarouselItem';
import { IHandlerOutputPaidCarouselItem } from '@app/interfaces/core/parsers/paid/paidCarouselItem';
import { loadWebsiteHelper } from '@app/core/runners/helpers';

describe('core', () => {
  describe('parsers', () => {
    describe('paid', () => {
      describe('paidCarousel', () => {
        describe('paidCarouselItem', () => {
          describe('paidCarouselItemParser', () => {
            describe('positive', () => {
              test(
                'should find the expected features and organic items',
                async () => {
                  /*
                   * Arrange
                   */
                  const path = 'core/parsers/common/dress.html';
                  const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/${path}`;

                  /*
                   * Act
                   */
                  const page = await loadWebsiteHelper({ url });
                  const paidCarouselRoot = page.locator(CONSTS_DOM_PAID_CAROUSEL_ROOT_EL).first();
                  const { header, body, footer, summary } = (await paidCarouselItemParser.parse({
                    elParent: paidCarouselRoot,
                  })) as  IHandlerOutputPaidCarouselItem;

                  /*
                   * Assert
                   */
                  expect(header).toBeTruthy();
                  expect(body).toBeTruthy();
                  expect(footer).toBeTruthy();
                  expect(summary).toBeTruthy();
                },
                20 * CONSTS_TIME_ONE_SECOND,
              );
            });
          });
        });
      });
    });
  });
});