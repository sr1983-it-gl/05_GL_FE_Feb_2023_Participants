
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
    this.score ++
  }

  this.calculatePercentage = function(){

    // 3 
    // (3 / 5) * 100
    return 
    (this.score / this.questionAnswersObj.length) * 100
  }

  // Increment Score
  // Get Score
  // Calculate Percentage
}

function QuizApplication(questionAnswersObj){

  this.questionAnswersObj = questionAnswersObj;
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

    for (let index = 0; index < answerChoices.length; index ++){

      const buttonId = "btn" + index;

      const answerChoiceButton = document.getElementById(buttonId);

      answerChoiceButton.onclick = function(event){

        const target = event.currentTarget
        console.log('Button is clicked ' + target);

        // Take the user-selected text - Functions
        // Get the question object
        // call the method - userAnserCorrect
          // YES
            // resultObj.incrementScore
          // NO
            // 
            
        // next()
      }
    }
  }

  this.next() = function() {
    
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