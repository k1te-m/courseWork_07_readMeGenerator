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

  if (userInputs.usage !== "") {
  markdownTemplate +=
  `

  ## Usage

  *Examples of project use:*

  ${userInputs.usage}`
  };

  if (userInputs.contributing !== "") {
  markdownTemplate +=
  `

  ## Contributing

  *If you are interested in contributing to this project, please follow the below instructions:*

  ${userInputs.contributing}`
  };
  
  
  




  return markdownTemplate;
}

module.exports = generateMarkdown;
