const inquirer = require('inquirer')

const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// // array of questions for user


const questions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? ',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your title!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project:',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your application?',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please tell us how to install your application!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this application?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please tell us how to use your project!')
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What License will you be using?',
            choices: ['Apache', 'MIT', 'ISC', 'GNU']
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'What are the contribution guidelines?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your github username')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!')
                    return false;
                }
            }
        },

    ])

}



// function call to initialize program
questions()

    .then(answers => {
        const licenseType = answers.license;
        console.log(licenseType)

        const licenseBadges = {
            MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            GNU: '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)',

        }
        const licenseMarkdown = licenseBadges[licenseType]
        console.log(licenseMarkdown)



        const markdown = generateMarkdown(answers, licenseMarkdown)
        fs.writeFile('./utils/readme.md', markdown, (err) => {
            if (err) throw err;
            console.log('The file has been saved')
        })


    });