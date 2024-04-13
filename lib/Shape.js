class Shape {
    /**
     * Represents a shape with a specified color.
     * @param {string} color - The color of the shape.
     */
    constructor(color) {
        this.color = color;
    }

    /**
     * Sets the color of the shape.
     * @param {string} color - The new color for the shape.
     */
    setColor(color) {
        this.color = color;
    }
}

module.exports = Shape;
