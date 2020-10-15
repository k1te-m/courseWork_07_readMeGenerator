// function to generate markdown for README
function generateMarkdown(userInputs) {
  let toC = "## Table of Contents";
  


  let markdownTemplate = 
  `# ${userInputs.title}

  ## Descripton
  ${userInputs.description}

  `;
  return markdownTemplate;
}

module.exports = generateMarkdown;
