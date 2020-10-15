// function to generate markdown for README
function generateMarkdown(userInputs) {
  let toC = "## Table of Contents";
  

  //Generate markdown for title/description sections
  let markdownTemplate = `
  # ${userInputs.title}

  ## Descripton
  ${userInputs.description}

  `;
  
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


  //Generate markdown for questions if entered by user
  if (userInputs.questions !== "") {
  markdownTemplate +=
  `

  ## Questions

  *If you have any questions regarding this application, please utilize the below contact information:*

  ${userInputs.questions}`
  };
  
  
  



  //returns the markdown template
  return markdownTemplate;
}

module.exports = generateMarkdown;
