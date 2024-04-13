const Shape = require('./Shape');

class Circle extends Shape {
    // Render method to generate SVG code for the circle
    render() {
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
    }
}

module.exports = Circle;
