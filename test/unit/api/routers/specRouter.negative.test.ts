import request from 'supertest';
import { app } from '@app/api';

describe('api', () => {
  describe('routers', () => {
    describe('specRouter', () => {
      describe('negative', () => {
        describe('should return a response with a 404 status', () => {
          test("when a valid 'specRouter' path has not been received", async () => {
            // Arrange
            const specUrlPath = '/api/v1/spec/ABC';

            // Act
            return request(app)
              .get(specUrlPath)
              .then((response) => {
                // Assert
                expect(response.status).toBe(404);
              });
          });
        });
      });
    });
  });
});
