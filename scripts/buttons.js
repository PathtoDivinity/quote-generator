// Get a reference to the button-container div
const btnContainer = document.querySelector('.button-container');

// Array of button data
const buttons = [
  {
    id: 'twitter',
    className: 'twitter-button',
    title: 'Tweet this!',
    innerHTML: '<i class="fab fa-twitter"></i>',
  },
  {
    id: 'norris',
    innerHTML: '<img src="../images/norris.png" alt="">',
  },
  {
    id: 'new-quote',
    textContent: 'New Quote',
  },
];

// Function to create and append buttons
function printBtn() {
    buttons.forEach(buttonData => {
      const button = document.createElement('button');
      button.id = buttonData.id;
      if (buttonData.className) {
        button.className = buttonData.className;
      }
      if (buttonData.title) {
        button.title = buttonData.title;
      }
      if (buttonData.innerHTML) {
        button.innerHTML = buttonData.innerHTML;
      }
      if (buttonData.textContent) {
        button.textContent = buttonData.textContent;
      }
  
      // Add event listeners to the dynamically created buttons
      if (button.id === 'new-quote') {
        button.addEventListener('click', newQuote);
      } else if (button.id === 'twitter') {
        button.addEventListener('click', tweetQuote);
      } else if (button.id === 'norris') {
        button.addEventListener('click', norrisQuote);
      }
  
      btnContainer.appendChild(button);
    });
  }
  
