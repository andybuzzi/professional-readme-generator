// function to generate contribution
const generateContribute = (contributeText) => {
  if (!contributeText) {
    return "";
  }

  return `
## Contributing

${contributeText};
    `;
};

//function to generate tests

const generateTests = (testsText) => {
  if (!testsText) {
    return "";
  }

  return `
## Tests

${testsText};
    `;
};

//function to generate instructions
const generateInstructions = (instructionText) => {
  if (!instructionText) {
    return "";
  }

  return `
### Instructions on how to reach out

${instructionText}
    `;
};

// function to add contribution to content table
const generateContributeTable = (contributeTable) => {
  if (!contributeTable) {
    return "";
  }

  return `
* [Contributing](#contributing)
    `;
};

// function to add tests to content table
const generateTestsTable = (testsTable) => {
  if (!testsTable) {
    return "";
  }

  return `
* [Tests](#tests)
    `;
};

// function to create link for the licenses
const licenseLink = (licenseLink) => {
  if (licenseLink == "MIT") {
    return `[Click here to learn more about this license](https://opensource.org/licenses/MIT)`;
  } else if (licenseLink == "Apache-2.0") {
    return `[Click here to learn more about this license](https://opensource.org/licenses/Apache-2.0)`;
  } else if (licenseLink == "BSD 3") {
    return `[Click here to learn more about this license](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (licenseLink == "GNU") {
    return `[Click here to learn more about this license](https://opensource.org/licenses/gpl-license)`;
  } else if (licenseLink == "Mozilla") {
    return `[Click here to learn more about this license](https://opensource.org/licenses/MPL-2.0)`;
  } else if (licenseLink == "Open") {
    return "";
  }
};

module.exports = (templateData) => {
  console.log(templateData);

  // destructure projects and about data from templateData based on their property key names

  return `
# ${templateData.name}  
![badge](https://img.shields.io/badge/license-${
    templateData.license
  }-brightgreen)

## Description 

${templateData.description}

[Click here to see the deployed project](${templateData.githubPage})

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
${generateContributeTable(templateData.contribute)}
${generateTestsTable(templateData.tests)}
* [Questions](#questions)


## Installation

${templateData.installation}


## Usage 

${templateData.usage}

## License

This project is covered under ${templateData.license} license. 

  ${licenseLink(templateData.license)}  
${generateContribute(templateData.contribute)}
${generateTests(templateData.tests)}

## Questions

Please feel free to contact me if you have any question or need any further information.

* [GitHub Profile](${templateData.username})

* [Email Address](${templateData.email})

${generateInstructions(templateData.reachOut)}
`;
};
