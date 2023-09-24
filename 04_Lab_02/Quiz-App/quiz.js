
function Answer(answerText){

  this.answerText = answerText;
}

function Question(questionNo, questionText, answerChoices, rightAnswer){

  this.questionNo = questionNo;
  this.questionText = questionText;
  this.answerChoices = answerChoices;
  this.rightAnswer = rightAnswer;
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

function QuizApplication(questionAnswersObj){

  this.questionAnswersObj = questionAnswersObj;

}

const javascriptQuizApp = new QuizApplication(
  []
  // Code - Pass all the 5 question objects
);