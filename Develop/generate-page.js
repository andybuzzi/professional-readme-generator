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
# Instructions on how to reach out

${instructionText}
    `;
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


## Table of Contents (Optional)


* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${templateData.installation}


## Usage 

${templateData.usage}

To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:


![alt text](assets/images/screenshot.png)


## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.


## License

This project is covered under ${templateData.license} license.


## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

${generateContribute(templateData.contribute)}
${generateTests(templateData.tests)}

## Questions

Please feel free to contact me if you have any question or need any further information.

*[GitHub Profile](${templateData.username})
*[Email Address](${templateData.email})

${generateInstructions(templateData.reachOut)}
`;
};
