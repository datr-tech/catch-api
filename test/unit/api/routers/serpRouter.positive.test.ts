import request from 'supertest';
import { app } from '@app/api/app';

describe('api', () => {
  describe('routers', () => {
    describe('serpRouter', () => {
      describe("positive: should return the expected 'searchEngineId' and 'searchTerm' values", () => {
        test("when called with '/api/v1/serp/1/abc'", async () => {
          // Arrange
          const specUrlPath = '/api/v1/serp/1/abc';
          const searchEngineId = '1';
          const searchTerm = 'abc';

          // Act
          return request(app)
            .get(specUrlPath)
            .then((response) => {
              // Assert
              expect(response.status).toBe(200);
              expect(response?.body?.searchEngineId).toEqual(searchEngineId);
              expect(response?.body?.searchTerm).toEqual(searchTerm);
            });
        });
      });
    });
  });
});
