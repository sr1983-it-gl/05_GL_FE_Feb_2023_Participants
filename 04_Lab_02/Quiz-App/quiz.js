
function Answer(answerText){

  this.answerText = answerText;
}

function Question(questionNo, questionText, answerChoices, rightAnswer){

  this.questionNo = questionNo;
  this.questionText = questionText;
  this.answerChoices = answerChoices;
  this.rightAnswer = rightAnswer;

  // Add support for isUserAnswerCorrect

  // 'NodeJS', 'Functions', 'HTML'
  this.isUserAnswerCorrect = function(userSelectedAnswer){

    if (rightAnswer.answerText == userSelectedAnswer){
      console.log('Correct Answer')
      return true;
    }else{
      console.log('Wrong answer')
      return false;
    }

  }

}

const answerFunctions = new Answer("Functions");
const answerXHTML = new Answer("XHTML");
const answerCSS = new Answer("CSS");
const answerHTML = new Answer("HTML");


const question1 = new Question(1, "Javascript Support", [answerFunctions, answerXHTML, answerCSS, answerHTML], answerFunctions)

const answerJQuery = new Answer("JQuery")
const answerXML = new Answer("XML");

const question2 = new Question(2, "Which language is used for styling web pages?", [answerHTML, answerJQuery, answerCSS, answerXML], answerCSS)

const answerPythonScript = new Answer("Python Script");

const answerDjango = new Answer("Django");
const answerNodeJS = new Answer("Node JS");

const question3 = new Question(3, "Which is not a Javascript framework?", [answerPythonScript, answerJQuery, answerDjango, answerNodeJS], answerPythonScript);

const answerPHP = new Answer("PHP");
const answerJS = new Answer("JS");
const answerAll = new Answer("All");

const question4 = new Question(4, "Which is used to connect to Database?", [answerPHP, answerHTML, answerJS, answerAll], answerPHP);

const answerLanguage = new Answer("Language");
const answerProgrammingLanguage = new Answer("Programming Language");
const answerDevelopment = new Answer("Development");

const question5 = new Question(5, "Java Script is a ", [answerLanguage, answerProgrammingLanguage, answerDevelopment, answerAll], answerProgrammingLanguage)

function QuizResult (questionAnswersObj){

  this.questionAnswersObj = questionAnswersObj;
  // Score property
  this.score = 0;

  this.getScore = function() {
    return this.score
  }

  this.incrementScore = function(){
    console.log('Score is incremented...')
    this.score ++
  }

  this.calculatePercentage = function(){

    console.log("questionAnswersObj" + questionAnswersObj);
    console.log("questionAnswersObj" + this.questionAnswersObj.length);

    const percentage = (this.score / this.questionAnswersObj.length) * 100;
    console.log("Percentage " + percentage);

    // 3 
    // (3 / 5) * 100
    return percentage;
  }

  // Increment Score
  // Get Score
  // Calculate Percentage
}

function QuizApplication(questionAnswersObj){

  this.questionAnswersObj = questionAnswersObj;
  this.quizResult = new QuizResult(this.questionAnswersObj);
  this.pageIndex = 0;

  // declare resultObj

  this.load = function(){

    this.attachListeners();
    this.displayQuizPage();
  }

  this.attachListeners = function(){

    const qaPairObj = 
    this.questionAnswersObj[this.pageIndex]

    const answerChoices = qaPairObj.answerChoices
    console.log('Number of answer is ' + answerChoices.length);

    const currentQuizAppObj = this;

    for (let index = 0; index < answerChoices.length; index ++){

      const buttonId = "btn" + index;

      const answerChoiceButton = document.getElementById(buttonId);

      this.addEventListener(answerChoiceButton, currentQuizAppObj)
    }
  }


  this.addEventListener = function(answerChoiceButton, currentQuizAppObj){

    // console.log("THIS 1-> " +  JSON.stringify(this))
    // this -> Works

    answerChoiceButton.onclick = function(event){

      // const a = currentQuizAppObj.pageIndex
      // console.log('A value is ' + a);

      const target = event.currentTarget
      console.log('Button is clicked ' + target);

      const userSelectedAnswer = target.children[0].innerHTML;
      console.log('User selected text ' + userSelectedAnswer)

      const qaPairObj = currentQuizAppObj.questionAnswersObj[currentQuizAppObj.pageIndex]

      const outcome = qaPairObj.isUserAnswerCorrect(userSelectedAnswer)

      if (outcome){
        currentQuizAppObj.quizResult.incrementScore();
      }else{
        // Do nothing
      }

      currentQuizAppObj.next();
    }    
  }

  this.next = function() {

    if (this.isLastQuestionAnswerPair()){
      this.displayResultPage();
    }else{
      this.displayNextQuizPage();
    }
  }

  this.displayNextQuizPage = function(){

    this.pageIndex ++ ;
    this.attachListeners();
    this.displayQuizPage();
  }

  this.displayResultPage = function(){

    const quizElement = document.getElementById("quiz");
  
    const content = 
      `<h1>Result </h1>
      <h2 id='score'>Your score : ${this.quizResult.getScore()}. Percentage is ${this.quizResult.calculatePercentage()} </h2>`

    quizElement.innerHTML = content;
  }

  this.displayQuizPage = function(){

    this.displayQASection();
    this.displayProgressSection();
  }

  this.displayQASection = function(){

    const qaPairObj = 
    this.questionAnswersObj[this.pageIndex]

    // Question Text
    const questionElement = document.getElementById("question");
    questionElement.innerText = qaPairObj.questionText

    // Answer Choices Text
    const answerChoices = qaPairObj.answerChoices
    console.log('Number of answer is ' + answerChoices.length);

    for (let index = 0; index < answerChoices.length; index ++){
    
      const answerChoiceObj = answerChoices[index];

      const identifier = "choice" + index;
      const answerChoiceElement = document.getElementById(identifier)

      answerChoiceElement.innerText = answerChoiceObj.answerText;
    }
  }

  // DisplayQASection
    // access to qaPairObject [questionText, answerChoicesText]
    // Question text
      // get reference to paragraph 
      // update the iinner-text property

    // Answers
      // for 
          // get referecne to "choice" + index
          // update inner-text for span element

  this.displayProgressSection = function(){

    const progressElement = document.getElementById("progress");

    const qaPairObj = this.questionAnswersObj[this.pageIndex]

    
    const progressText
      = `Question ${qaPairObj.questionNo} of ${questionAnswersObj.length}`
    progressElement.innerText = progressText

  }
  // DisplayprogressSection

  this.isLastQuestionAnswerPair = function() {

    if (this.pageIndex == (this.questionAnswersObj.length - 1)){
      return true;
    }else{
      return false;
    }
  }

}

const javascriptQuizApp = new QuizApplication(
  [question1, question2, question3, question4, question5]
  // Code - Pass all the 5 question objects
);
javascriptQuizApp.load()