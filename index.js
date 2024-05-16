import('inquirer').then(inquirer => {
    const SvgGenerator = require('./lib/SvgGenerator');

    async function promptUser() {
        let createMore = true;
        let logoCounter = 1;

        while (createMore) {
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
                },
                {
                    type: 'confirm',
                    name: 'customFilename',
                    message: 'Do you want to provide a custom filename?',
                    default: false
                },
                {
                    type: 'input',
                    name: 'filename',
                    message: 'Enter the filename for the logo (without extension):',
                    when: (answers) => answers.customFilename,
                    validate: input => input ? true : 'Filename cannot be empty.'
                }
            ]);

            let filename;
            if (answers.customFilename) {
                filename = `${answers.filename}.svg`;
            } else {
                filename = `logo${logoCounter > 1 ? logoCounter : ''}.svg`;
            }

            const generator = new SvgGenerator(answers.text, answers.textColor, answers.shape, answers.shapeColor);
            generator.saveToFile(filename);
            logoCounter++;

            const { createAnother } = await inquirer.default.prompt([
                {
                    type: 'confirm',
                    name: 'createAnother',
                    message: 'Do you want to create another logo?',
                    default: false
                }
            ]);

            createMore = createAnother;
        }
    }

    promptUser();
}).catch(err => console.error(err));
