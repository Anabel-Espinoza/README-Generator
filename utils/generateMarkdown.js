// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  } else {
    return ''
  } 
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
  if (license) {
    return '???'
  }
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
  if (license) {
    return `## License
    Project under: ${license} licence`
  } else {
    return ''
  }
  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ${renderLicenseBadge(data.license)}

## Description

${data.projectDesc}

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
