// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation
  * Usage
  * Credits
  * License
  
  ##Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributions

  ${data.contributions}

  ## License 
  
  Licensed under the ${data.license} license

  ## Questions

  [Github](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
