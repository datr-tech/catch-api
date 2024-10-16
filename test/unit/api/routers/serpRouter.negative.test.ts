import request from 'supertest';
import { app } from '@app/api/app';

describe('api', () => {
  describe('routers', () => {
    describe('serpRouter', () => {
      describe('positive: should return an error', () => {
        test("when called with an erroneous 'websiteId', as per '/api/v1/serp/0/abc'", async () => {
          /*
           * Arrange
           */
          const specUrlPath = '/api/v1/serp/0/abc';

          /*
           * Act
           */
          return request(app)
            .get(specUrlPath)
            .then((response) => {

              /*
               * Assert
               */
              expect(response.status).toBe(404);
              expect(response.body?.error[0].msg).toBe('Invalid value');
              expect(response.body?.error[0].path).toBe('websiteId');
              expect(response.body?.error[0].value).toBe('0');
            });
        });
      });
      test("when called with an erroneous 'searchTerm', as per '/api/v1/serp/1/'", async () => {

        /*
         * Arrange
         */
        const specUrlPath = '/api/v1/serp/1/';

        /*
         * Act
         */
        return request(app)
          .get(specUrlPath)
          .then((response) => {

            /*
             * Assert
             */
            expect(response.status).toBe(404);
          });
      });
    });
  });
});
