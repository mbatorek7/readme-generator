function renderLicenseBadge(license) {
  switch(license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache-2.0": 
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL-3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "none":
      return "";
  }
}

function renderLicenseSection(license) {
  if(license == "none") {
    return "";
  } else {
    return "## License";
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.desc}

  ## Installation
  To clone this repo:
  git clone ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}
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

  ## Tests
  ${data.tests}

  ## Questions?
  - Github Profile: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
