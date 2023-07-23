// script.js
document.addEventListener('DOMContentLoaded', () => {
  const terminalOutput = document.getElementById('output');
  const terminalInput = document.getElementById('input');
  const terminalPrompt = 'saket-kaswa >> ';

  function printOutput(text) {
    terminalOutput.innerHTML += `${text}\n`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function handleCommand(command) {
    const lowercaseCommand = command.toLowerCase();

    if (lowercaseCommand === 'whoami') {
      printOutput('Saket Kaswa');
    } else if (lowercaseCommand === 'clear') {
      terminalOutput.innerHTML = '';
      terminalInput.value = ''; // Clear the input as well
    } else if (lowercaseCommand === 'exit') {
      printOutput('Hopefully, you got to know about Saket well!');
      terminalInput.disabled = true;
      terminalInput.removeEventListener('keydown', handleInput);
    } else if (lowercaseCommand === 'github') {
      window.location.href = 'https://github.com/SaketKaswa20';
    } else if (lowercaseCommand === 'linkedin') {
      window.location.href = 'https://www.linkedin.com/in/saket-kaswa/';
    } else if (lowercaseCommand === 'help') {
      printOutput('Available commands:');
      printOutput('whoami - Display your name');
      printOutput('clear - Clear the terminal');
      printOutput('exit - Exit the terminal');
      printOutput('github - Open GitHub profile');
      printOutput('linkedin - Open LinkedIn profile');
    } else {
      printOutput(`Command not found [Use 'help'] : ${command}`);
    }
  }

  function handleInput(event) {
    if (event.key === 'Enter' || event.key === 'Return') {
      event.preventDefault();
      const command = event.target.value.trim();
      event.target.value = '';

      if (command !== '') {
        printOutput(`${terminalPrompt}${command}`);
        handleCommand(command);
      } else {
        printOutput(terminalPrompt);
      }
    }
  }

  function showInitialPrompt() {
    printOutput(`Use 'help' to know the commands`);
    printOutput(terminalPrompt);
    terminalInput.addEventListener('keydown', handleInput);

    // Set the initial cursor focus after the terminal has been initialized
    terminalInput.focus();
  }

  showInitialPrompt();
});
