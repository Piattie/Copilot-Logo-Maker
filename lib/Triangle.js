const Shape = require('./Shape');

/**
 * Represents a triangle shape.
 * @extends Shape
 */
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="150,10 250,190 50,190" fill="${this.color}" />`;
    }

    getCenter() {
        // Centroid of a triangle is the average of its vertices' coordinates
        const x1 = 150, y1 = 10;
        const x2 = 250, y2 = 190;
        const x3 = 50, y3 = 190;
        const centerX = (x1 + x2 + x3) / 3;
        const centerY = (y1 + y2 + y3) / 3;
        return { x: centerX, y: centerY };
    }
}

module.exports = Triangle;
