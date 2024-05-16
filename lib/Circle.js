const Shape = require('./Shape');

class Circle extends Shape {
    constructor(color, cx = 150, cy = 100, r = 90) {
        super(color);  // Assuming the Shape constructor takes color
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }

    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />`;
    }

    getCenter() {
        return { x: this.cx, y: this.cy };
    }
}

module.exports = Circle;
