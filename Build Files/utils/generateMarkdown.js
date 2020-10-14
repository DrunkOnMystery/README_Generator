// function to generate markdown for README
function generateMarkdown(answers) {
return `
# ${answers.title}

## Description 

${answers.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Contributing](#contributing)
* [Tests](#tests)


## Installation

${answers.installation}


## Usage 

${answers.usage}


## Credits

${answers.credits}


## License

This product is licensed under the standard ${answers.license} license.

Copyright (c) ${answers.licenseYear} ${answers.licenseName}


## Badges

![Picture of ${answers.license}](https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Contributing

${answers.contributions}

## Tests

${answers.runTest}

## Questions

Questions can be sent to ${answers.email}
Or you can visit my Github page at https://www.github.com/${answers.github}`
;
}
//export
module.exports = generateMarkdown;

