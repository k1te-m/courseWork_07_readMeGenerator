// function to generate markdown for README
function generateMarkdown(userInputs) {
  let toC = `## Table of Contents`;

  if (userInputs.installation !== "") { toC += `
  * [Installation](#installation)` 
  };

  if (userInputs.usage !== "") { toC += `
  * [Usage](#usage)`
  };

  if (userInputs.contributing !== "") { toC += `
  * [Contributing](#contributing)`
  };
  
  if (userInputs.tests !== "") { toC += `
  * [Tests](#tests)`
  };

  if (userInputs.questions !== "") { toC += `
  * [Questions](#questions)`
  };
  

  //Generate markdown for title/description sections
  let markdownTemplate = `
  # ${userInputs.title}

  ![GitHub](https://img.shields.io/github/license/${userInputs.username}/${userInputs.repo})![GitHub top language](https://img.shields.io/github/languages/top/${userInputs.username}/${userInputs.repo})

  ## Descripton
  ${userInputs.description}

  `;

  //Add table of contents after Description Section
  markdownTemplate += toC;
  
  
  //Generate markdown for installation if entered by user
  if (userInputs.installation !== "") {
  markdownTemplate +=
  `

  ## Installation 
    
  *Steps required to install package:* 
    
  ${userInputs.installation}`
  };
  
  //Generate markdown for usage if entered by user
  if (userInputs.usage !== "") {
  markdownTemplate +=
  `

  ## Usage

  *Examples of project use:*

  ${userInputs.usage}`
  };

  //Generate markdown for contributing if entered by user
  if (userInputs.contributing !== "") {
  markdownTemplate +=
  `

  ## Contributing

  *If you are interested in contributing to this project, please follow the below instructions:*

  ${userInputs.contributing}`
  };
  
  
  //Generate markdown for tests if entered by user
  if (userInputs.tests !== "") {
  markdownTemplate +=
  `

  ## Tests

  *Application tests and instructions for them:*

  ${userInputs.tests}`
  };

  //Generate markdown for the license section
  markdownTemplate +=
  `

  ## License

  ${userInputs.license}
  `;


  //Generate markdown for questions if entered by user (email reference https://gitlab.com/gitlab-org/gitlab-foss/-/issues/57185)
  if (userInputs.questions !== "") {
  markdownTemplate +=
  `

  ## Questions

  *If you have any questions regarding this application, please utilize the below contact information:*

  [${userInputs.questions}](mailto:${userInputs.questions})
  
  [GitHub Profile](https://www.github.com/${userInputs.username})
  `
  };
  

  //returns the markdown template
  return markdownTemplate;
}

module.exports = generateMarkdown;



