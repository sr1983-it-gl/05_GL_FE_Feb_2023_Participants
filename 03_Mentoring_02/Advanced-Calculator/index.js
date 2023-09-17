
const ioPanel = document.getElementById("ioPanel")

function updateIOPanel(value){
  
  const ioPanelText = ioPanel.innerText;

  const finalText = ioPanelText + value;

  ioPanel.innerText = finalText;

}

function setIOPanel(value){

  ioPanel.innerText = value;
}

function clearButtonHandler(){

  ioPanel.innerText = "";
}

function backspaceButtonHandler(){

  const ioPanelText = ioPanel.innerText

  if (ioPanelText.length > 0){

    const trimmedText 
    = ioPanelText.substring(0, (ioPanelText.length - 1));
    console.log("Trimedd Text is " + trimmedText)

    ioPanel.innerText = trimmedText;

  }
}

function enterButtonHandler(){

  const ioPanelText = ioPanel.innerText;

  if (ioPanelText == ''){
    ioPanel.innerText = "<NO VALUE ENTERED>" 
  }else{

    try{
      const outcome = eval(ioPanelText)
      console.log("Ouutcome is " + outcome);
      ioPanel.innerText = outcome;

    }catch(error){
      ioPanel.innerText = "Expression Error: [" + ioPanelText + "]"
    }
  }  
}

function negationButtonHandler(){

  // -8 -> 8
  // 10 -> -10
  
  const aNumber = getIOPanelContentAsNumber();
  
  console.log("A Number is " + aNumber)

  // const negatedNo = aNumber * -1

  const negatedNo = -aNumber;

  ioPanel.innerText = negatedNo;

}

function getIOPanelContentAsNumber(){

  const ioPanelText = ioPanel.innerText
  const aNumber = parseInt(ioPanelText, 10);
  return aNumber;
}

function sqrtButtonHandler(){

  if (validateNumber()){
    const aNumber = getIOPanelContentAsNumber();
    const outcome = Math.sqrt(aNumber);
    setIOPanel(outcome);  
  }else{
    setIOPanel("Error")
  }
}



function squareButtonHandler(){

  if (validateNumber()){
    const aNumber = getIOPanelContentAsNumber();
    const outcome = (aNumber * aNumber)
    setIOPanel(outcome);
  }else{
    setIOPanel("Error")
  }
}

function expButtonHandler(){

  if (validateNumber()){
    const aNumber = getIOPanelContentAsNumber();
    const outcome = Math.exp(aNumber)
    setIOPanel(outcome);
  }else{
    setIOPanel("Error")
  }

}


function logButtonHandler(){

  if (validateNumber()){
    const aNumber = getIOPanelContentAsNumber();
    const outcome = Math.log(aNumber)
    setIOPanel(outcome);
  }else{
    setIOPanel("Error")
  }
}


function sinButtonHandler(){

  if (validateNumber()){
    const aNumber = getIOPanelContentAsNumber();
    const radianNumber = convertDegreeToRadians(aNumber);
    const outcome = Math.sin(radianNumber)
    setIOPanel(outcome);
  }else{
    setIOPanel("Error")
  }

}

function cosButtonHandler(){

  if (validateNumber()){
    const aNumber = getIOPanelContentAsNumber();
    const radianNumber = convertDegreeToRadians(aNumber);
    const outcome = Math.cos(radianNumber)
    setIOPanel(outcome);
  }else{
    setIOPanel("Error")
  }

}


function tanButtonHandler(){

  if (validateNumber()){
    const aNumber = getIOPanelContentAsNumber();
    const radianNumber = convertDegreeToRadians(aNumber);
    const outcome = Math.tan(radianNumber)
    setIOPanel(outcome);
  }else{
    setIOPanel("Error")
  }

}

function convertDegreeToRadians(degree){

  return degree * (Math.PI / 180)
}

function validateNumber(){

  // 55
  const ioPanelText = ioPanel.innerText;

  if (isNaN(ioPanelText)){
    console.log("Not a Number is TRUE")
    return false;
  }else {
    console.log("Not a Number is FALSE")
    return true;
  }
}