
function Answer(answerText){

  this.answerText = answerText;
}

function Question(questionNo, questionText, answerChoices, rightAnswer){

  // Code

}

const answerFunctions = new Answer("Functions");
const answerXHTML = new Answer("XHTML");
const answerCSS = new Answer("CSS");
const answerHTML = new Answer("HTML");


const question1 = new Question(1, "Javascript Support", [answerFunctions, answerXHTML, answerCSS, answerHTML], answerFunctions)

