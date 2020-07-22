const inquirer = require('inquirer')

const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user


const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? ',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your application?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this application?',
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
            message: 'What are the contribution guidelines?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },

    ])

}



// function call to initialize program
questions()

  .then(answers => {
      const markdown = generateMarkdown(answers) 
      fs.writeFile('readme.md', markdown, (err) => {
          if (err) throw err;
          console.log('The file has been saved')
      })
})
  ;
