// Function to create a new user message
function createUserMessage(message) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user-message');
    messageElement.textContent = message;
    return messageElement;
  }
  
  // Function to create a new bot message
  function createBotMessage(message) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('message', 'bot-message');
    messageElement.textContent = message;
    return messageElement;
  }
  
  // Function to handle user input
  function handleUserInput() {
    var userInput = document.getElementById('user-input');
    var userMessage = userInput.value;
    var chatLog = document.getElementById('chat-log');
  
    if (userMessage !== '') {
      chatLog.appendChild(createUserMessage(userMessage));
      userInput.value = '';
      chatLog.scrollTop = chatLog.scrollHeight;
  
      // Process user message and generate bot response
      // Replace the code below with your actual logic
      var botMessage = 'Thank you for your message! Our healthcare experts will get back to you soon.';
      setTimeout(function() {
        chatLog.appendChild(createBotMessage(botMessage));
        chatLog.scrollTop = chatLog.scrollHeight;
      }, 500);
    }
  }
  
  // Event listener for send button
  document.getElementById('send-btn').addEventListener('click', handleUserInput);
  
  // Event listener for Enter key press
  document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      handleUserInput();
    }
  });
  