const fs = require('fs');
const path = require('path');
const Circle = require('./Circle');
const Triangle = require('./Triangle');
const Square = require('./Square');

class SvgGenerator {
    constructor(text, textColor, shapeType, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeType = shapeType;
        this.shapeColor = shapeColor;
    }

    createShape() {
        const shapeClasses = {
            Circle: Circle,
            Triangle: Triangle,
            Square: Square
        };
        const ShapeClass = shapeClasses[this.shapeType];
        if (!ShapeClass) {
            throw new Error("Invalid shape type provided.");
        }
        return new ShapeClass(this.shapeColor);
    }

    generateSvg() {
        const shape = this.createShape();
        const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="100" font-family="Arial" font-size="20" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
        </svg>`;
        return svgContent;
    }

    saveToFile(filename) {
        // Ensuring the 'examples' directory exists
        const directory = path.join(__dirname, '../examples');
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }

        const filePath = path.join(directory, filename);
        const content = this.generateSvg();
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Generated ' + filePath);
    }
}

module.exports = SvgGenerator;
