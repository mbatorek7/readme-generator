// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "None") {
    return "";
  } else {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "None") {
    return "";
  } else {

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "None") {
    return "";
  } else {

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)

  ## Description
  ${data.desc}

  ## Installation
  To clone this repo:
  git clone ${data.installation}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseBadge(data.license)}

  ## Contributing
  To contribute to this application, create a pull request.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME-HERE)
  - Commit your new feature (git commit -m 'Add some feature')
  - Push your branch (git push)
  - Create a new Pull Request

  Following a code review, your feature will be merged.
`;
}

module.exports = generateMarkdown;
