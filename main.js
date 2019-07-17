// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function(){
  const likes = document.getElementsByClassName("like-glyph")
  for (let i = 0; i < likes.length; i++) {
    const element = likes[i];
    element.addEventListener("click", function(e){
        mimicServerCall()
        .then(function(response){
          return response;
        })
        .then(function(resp){
          if(e.target.innerHTML === EMPTY_HEART){
            e.target.innerHTML = FULL_HEART
            e.target.className = "activated-heart"
          }
          else if (e.target.innerHTML === FULL_HEART){
            e.target.innerHTML = EMPTY_HEART;
            e.target.className = "like-glyph"
          }
        })
        .catch((error) => {
          document.getElementById("modal").className = ""
          setTimeout(function(){
            document.getElementById("modal").className = "hidden"},
            3000);
        })
      }
    )
  }
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
