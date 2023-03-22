// Function that returns a license badge except when user selected: Unlicensed
function renderLicenseBadge(license) {
  if (license === 'Unlicensed') {
    return ''
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  } 
}

// Function returns the license link for Table of Contents EXCEPT when user selects: Unlicensed.
function renderLicenseLink(license) {
  if (license === 'Unlicensed') {
    return ''
  } else {
    return '- [License](#license)'
  }
}

// Function returns the license section of README, except when user selects: Unlicensed.
function renderLicenseSection(license) {
  if (license === 'Unlicensed') {
    return ''
  } else {
    return `## License
Project under ${license} license.`  }
}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

${renderLicenseBadge(data.license)}

## Description

${data.projectDesc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [How to Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation

${data.installation}

## Usage

Application link/Commmand to run: ${data.link}
${data.usage}

## Credits

Created by: ${data.creator} (https://github.com/${data.gitHub})
Collaborations: ${data.credits}

## How to Contribute

${data.contribute}

## Tests

${data.tests}

## Questions

Please submit your questions or comments to my email ${data.email}.
Access my gitHub profile here: https://github.com/${data.gitHub}

${renderLicenseSection(data.license)}

`
}

module.exports = generateMarkdown;