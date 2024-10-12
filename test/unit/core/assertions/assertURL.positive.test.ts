import { assertURL } from '@app/core/assertions';

describe('core', () => {
  describe('assertions', () => {
    describe('assertURL', () => {
      describe('positive', () => {
        describe('should return undefined', () => {
          test("when the value of the 'url' param is a valid URL", () => {
            // Arrange
            const url = 'https://www.example.com';
            // Act
            const response = assertURL({ url });
            // Assert
            expect(response).toBeUndefined();
          });
        });
      });
    });
  });
});
