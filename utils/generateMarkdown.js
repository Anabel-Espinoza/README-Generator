// Function that returns a license badge except when user selected: Unlicensed OR Other
function renderLicenseBadge(license) {
  if (license === 'Unlicensed' || license === "Other") {
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

- [Instalation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
${renderLicenseLink(data.license)}

## Instalation

${data.installation}

## Usage

Application link/Commmand to run: ${data.link}
${data.usage}

## Tests

${data.tests}

## Credits

Created by: ${data.creator}
Collaborations: ${data.credits}

${renderLicenseSection(data.license)}
`
}

module.exports = generateMarkdown;