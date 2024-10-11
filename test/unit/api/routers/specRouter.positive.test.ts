import request from 'supertest';
import { app } from '@app/api/app';

describe('api', () => {
  describe('routers', () => {
    describe('specRouter', () => {
      describe('positive: should return the expected spec', () => {
        test("when called with '/api/v1/spec'", async () => {
          // Arrange
          const specUrlPath = '/api/v1/spec';
          const specExpected = 'NOT_AVAILABLE';

          // Act
          return request(app)
            .get(specUrlPath)
            .then((response) => {
              // Assert
              expect(response.status).toBe(200);
              expect(response?.body?.spec).toEqual(specExpected);
            });
        });
      });
    });
  });
});
