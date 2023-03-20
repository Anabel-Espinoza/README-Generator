// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'Unlicense') {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  } else {
    return ''
  } 
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'Unlicense') {
    return '- [License](#license)'
  } else {
    return ''
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'Unlicense') {
    return `## License
    Project under: ${license} license.`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ${renderLicenseBadge(data.license)}

## Description

${data.projectDesc}

## Table of Contents

- [Instalation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(license)}

## Instalation

${data.installation}

## Usage

Application link: ${data.link}
${data.usage}

## Credits

Created by: ${data.creator}
Collaborations: ${data.credits}

${renderLicenseSection(data.license)}
`
}

module.exports = generateMarkdown;
