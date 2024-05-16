class Shape {
    /**
     * Represents a shape with a specified color.
     * @param {string} color - The color of the shape.
     */
    constructor(color) {
        this.color = color;
        this.validateColor(color);  // Validate color on instantiation
    }

    /**
     * Validates the color format (simple validation example).
     * @param {string} color - The color to validate.
     */
    validateColor(color) {
        // Simple validation to check if the color might be a valid hex or named color
        if (!/^#[0-9A-F]{6}$/i.test(color) && !/^[a-z]+$/i.test(color)) {
            throw new Error("Invalid color format.");
        }
    }

    /**
     * Sets the color of the shape.
     * @param {string} color - The new color for the shape.
     */
    setColor(color) {
        this.validateColor(color);
        this.color = color;
    }

    /**
     * Render method stub to be implemented by subclasses.
     * This should return the SVG string representation of the shape.
     */
    render() {
        throw new Error("Render method must be implemented by subclasses");
    }
}

module.exports = Shape;
