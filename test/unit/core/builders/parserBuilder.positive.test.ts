import { CONSTS_PATHS_TEST_FIXTURES_DIR } from '@app/config/consts/paths';
import { parserBuilder } from '@app/core/builders';
import { loadWebsiteHelper } from '@app/core/runners/helpers';
import { IHandler } from '@app/interfaces/core/builders/parserBuilder/handlers';

const url = `file://${CONSTS_PATHS_TEST_FIXTURES_DIR}/core/builders/parserBuilder.positive.html`;

describe('core', () => {
  describe('builders', () => {
    describe('parserBuilder', () => {
      describe('positive', () => {
        describe("should return parser.parse'", () => {
          test("when 'elName' and 'handler' are valid", async () => {
            /*
             * Arrange
             */
            const elName = '.parser';
            const expected = 'PARSER';
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
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
