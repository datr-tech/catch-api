import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { parserBuilder } from '@app/core/builders';
import { loadWebsiteHelper } from '@app/core/runners/helpers';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';

const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/builders/parserBuilder.negative.html`;

describe('core', () => {
  describe('builders', () => {
    describe('parserBuilder', () => {
      describe('negative', () => {
        describe('should return undefined', () => {
          test("when 'elName' is not found", async () => {
            /*
             * Arrange
             */
            const elName = '.UNKNOWN';
            const handler: IHandler = ({ el }) => el.innerText();

            /*
             * Act
             */
            const parser = parserBuilder({ elName, handler });
            const elParent = await loadWebsiteHelper({ url });
            const found = await parser.parse({ elParent });

            /*
             * Assert
             */
            expect(found).toBeUndefined();
          });
        });
        describe('should throw an error', () => {
          test("when 'elName' is an empty string", async () => {
            /*
             * Arrange
             */
            const elName = '';
            const errorExpected = "'elName' must be a non-empty string";
            const handler: IHandler = ({ el }) => el.innerText();

            /*
             * Act
             */
            const errorHandler = () => {
              parserBuilder({ elName, handler });
            };

            /*
             * Assert
             */
            expect(errorHandler).toThrow(errorExpected);
          });
        });
      });
    });
  });
});
