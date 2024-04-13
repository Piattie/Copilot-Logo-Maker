const Circle = require('./Circle');
const Triangle = require('./Triangle');
const Square = require('./Square');

// Import the required shape classes

// Describe the Shape classes test suite
describe('Shape classes', () => {
    // Test case for Circle class
    test('Circle should render correct SVG', () => {
        // Create a new Circle object with blue color
        const circle = new Circle('blue');
        // Assert that the rendered SVG matches the expected value
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="90" fill="blue" />');
    });

    // Test case for Triangle class
    test('Triangle should render correct SVG', () => {
        // Create a new Triangle object with red color
        const triangle = new Triangle('red');
        // Assert that the rendered SVG matches the expected value
        expect(triangle.render()).toBe('<polygon points="150,10 250,190 50,190" fill="red" />');
    });

    // Test case for Square class
    test('Square should render correct SVG', () => {
        // Create a new Square object with green color
        const square = new Square('green');
        // Assert that the rendered SVG matches the expected value
        expect(square.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="green" />');
    });
});
