// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeButtons = document.querySelectorAll(`.like-glyph`);
for (const button of likeButtons) {
  button.addEventListener('click', handleClick)
};

function handleClick (element) {
  mimicServerCall()
  .then((value) => {
    document.querySelector('div').classList.add('hidden');
    console.log(value);
    element.target.classList.toggle('activated-heart')
  })
  .catch((value) => {
    document.querySelector('div').classList.remove('hidden');
    document.querySelector('p').innerHTML = value
    setTimeout(() => {
      document.querySelector('div').classList.add('hidden');
    }, 3000)
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
