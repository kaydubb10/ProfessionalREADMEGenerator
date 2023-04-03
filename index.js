const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please provide a brief description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions for your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is the usage information for your project?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What are the contribution guidelines for your project?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'What are the test instructions for your project?',
      name: 'tests',
    },
    {
      type: 'list',
      message: 'What is the license for your project?',
      choices: ['MIT', 'Apache', 'GPL', 'None'],
      name: 'license',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
  .then((data) => {
    const { title, description, installation, usage, contribution, tests, license, username, email } = data;

    const licenseBadge = (license !== 'None') ? `![License](https://img.shields.io/badge/License-${license}-blue.svg)` : '';

    const readmeContent = `
# ${title}

${licenseBadge}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contribution

${contribution}

## Tests

${tests}

## License

This project is licensed under the ${license} license.

## Questions

If you have any questions about this project, please contact ${username} at ${email}.

To view more of my projects, visit my [GitHub profile](https://github.com/${username}/).
`;

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('README.md file generated successfully!')
    );
  });
