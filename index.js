const fs = require('fs');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');

async function promptUser() {
    // Dynamically import inquirer just before use
    const inquirer = await import('inquirer');

    const answers = await inquirer.default.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3 ? true : 'Maximum of three characters allowed.'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (name or hex):'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (name or hex):'
        }
    ]);

    const shape = new {
        'Circle': Circle,
        'Triangle': Triangle,
        'Square': Square
    }[answers.shape](answers.shapeColor);

    const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="115" font-family="Arial" font-size="20" fill="${answers.textColor}" text-anchor="middle" alignment-baseline="middle">${answers.text}</text>
    </svg>`;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

promptUser();
