import request from 'supertest';
import { app } from '@app/api';

describe('api', () => {
  describe('routers', () => {
    describe('schemaRouter', () => {
      describe('negative', () => {
        describe('should return a response with a 404 status', () => {
          test("when an invalid 'schemaVersion' was received", async () => {
            // Arrange
            const schemaUrlPath = '/api/schema/ABC';

            // Act
            return request(app)
              .get(schemaUrlPath)
              .then((response) => {
                // Assert
                expect(response.status).toBe(404);
              });
          });
          test("when an empty 'schemaVersion' was received", async () => {
            // Arrange
            const schemaUrlPath = '/api/schema';

            // Act
            return request(app)
              .get(schemaUrlPath)
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
