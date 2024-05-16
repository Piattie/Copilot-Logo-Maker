const Shape = require('./Shape');

/**
 * Represents a square shape.
 * @extends Shape
 */
class Square extends Shape {
    constructor(color, x = 50, y = 50, width = 200, height = 200) {
        super(color);  // Assuming the Shape constructor takes color
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }

    getCenter() {
        const centerX = this.x + this.width / 2;
        const centerY = this.y + this.height / 2;
        return { x: centerX, y: centerY };
    }
}

module.exports = Square;
