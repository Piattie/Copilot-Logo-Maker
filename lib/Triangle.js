const Shape = require('./Shape');

class Triangle extends Shape {
    // Render method to generate SVG code for the triangle shape
    render() {
        return `<polygon points="150,10 250,190 50,190" fill="${this.color}" />`;
    }
}

module.exports = Triangle;
