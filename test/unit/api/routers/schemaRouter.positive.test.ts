import request from 'supertest';
import { app } from '@app/api/app';
import schemaV1 from '@app/api/schemas/schema.v1.json';

describe('api', () => {
  describe('routers', () => {
    describe('schemaRouter', () => {
      describe('positive: should return the expected spec', () => {
        test("when called with '/api/schema/v1'", async () => {
          /*
           * Arrange
           */
          const schemaUrlPath = '/api/schema/v1';
          const schemaExpected = schemaV1;

          /*
           * Act
           */
          return request(app)
            .get(schemaUrlPath)
            .then((response) => {
              /*
               * Assert
               */
              expect(response.status).toBe(200);
              expect(response?.body?.schema).toStrictEqual(schemaExpected);
            });
        });
      });
    });
  });
});
