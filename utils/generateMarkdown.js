// function to generate markdown for README
// function licenseBadge(data){
//   console.log (data.license)
// }

function generateMarkdown(data,licenseMarkdown) {
  return `
  ${licenseMarkdown}
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributions

  ${data.contributions}

  ## License 
  
  Licensed under the ${data.license} license

  ## Questions

  [Github](https://github.com/${data.github})
  
  Email me: ${data.email}
`;
}

module.exports = generateMarkdown;
