/*
  Magic 8 Ball
  Name: Gabe Gibbs
  Period: 4
*/
function askEightBall() {
  let userName = document.getElementById('nameInput').value
  let userQuestion = document.getElementById('questionInput').value
  console.log(userName, userQuestion)
   // Show The Question on Site
    document.getElementById('questionOut').textContent = "you asked: " + userQuestion;
  
  
  //Greet the user!
  let greeting



    if (userName === "") {
      greeting = "Hello Mystery Person!"
  } else {
      greeting = `Hello ${userName}!`
  }
  
  document.getElementById('greeting').textContent = greeting

  //Check the question
  
    if (userQuestion === ""){
      document.getElementById('questionOut').textContent = ''
      document.getElementById('answer').textContent = 'The 8 Ball needs a question to work you absolute BAFFOON. YOU JOKE. IF YOU WERE A VARIABLE YOU WOULD BE !smart'
      document.getElementById('answerType').innerHTML = ''
      return
    }
  
  //Get a random number
    let randomNumber = Math.floor(Math.random() * 8);
  //Get the magic 8balls answer
    let eightBall = '';
    switch (randomNumber) {
      case randomNumber = 0:
        eightBall = 'It is certain';
        break;
      case randomNumber = 1:
        eightBall = 'It is decidedly so';
        break;
      case randomNumber = 2:
        eightBall = 'Signs point to yes';
        break;
      case randomNumber = 3:
        eightBall = 'Outlook not so good';
        break;
      case randomNumber = 4:
        eightBall = 'Do not count on it';
        break;
      case randomNumber = 5:
        eightBall = 'My sources say no';
        break;
      case randomNumber = 6:
        eightBall = 'Cannot predict now';
        break;
      case randomNumber = 7:
        eightBall = 'Reply hazy try again';
        break;
    }
    document.getElementById('answer').textContent = `${eightBall}`
  //Show the 8ball answer type badge
    if (randomNumber <= 2) {
      document.getElementById('answerType').innerHTML = '<span class="yes"><p>Yes</p></span>'
    } else if (randomNumber > 5) {
      document.getElementById('answerType').innerHTML = '<span class="maybe"><p>Maybe...</p></span>'
    } else {
      document.getElementById('answerType').innerHTML = '<span class="no"><p>No</p></span>'
    }







}


function fadeReset() {
  const elements = document.querySelectorAll('.greeting, .question-out, .answer')
  
  elements.forEach(element => {
    element.classList.remove('fade-in-text')

    void element.offsetWidth

    element.classList.add('fade-in-text')
  });
}