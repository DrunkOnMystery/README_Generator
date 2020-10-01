// function to generate markdown for README
function generateMarkdown(answers) {
return `
# ${answers.title}

## Description 

${answers.description}

## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Contributing](#contributions)
* [Tests](#runTest)


## Installation

${answers.installation}


## Usage 

${answers.usage}


## Credits

${answers.credits}


## License

${answers.license}

## Badges

${answers.badges}

## Contributing

${answers.contributions}

## Tests

${answers.runTest}`

;
}

module.exports = generateMarkdown;

