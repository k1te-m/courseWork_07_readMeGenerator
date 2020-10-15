// function to generate markdown for README
function generateMarkdown(userInputs) {
  return `
  # ${userInputs.title}
  ## ${userInputs.license}
  `;
  

}

module.exports = generateMarkdown;
