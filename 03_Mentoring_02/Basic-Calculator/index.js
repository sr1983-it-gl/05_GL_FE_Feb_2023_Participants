
function addListenersForAllButtons(){

  const allButtons = document.getElementsByClassName('button');

  console.log(allButtons)

  const allButtonsAsArray = Array.from(allButtons);

  for (let index = 0; index < allButtonsAsArray.length; index ++ ){

    const divButton = allButtonsAsArray[index];

    divButton.addEventListener("click",  handleButtonEvent)

  }
}

function handleButtonEvent(event){

  console.log("Button click event ")

  const divButtonText = getTextualContent(event);

  if (divButtonText == "CLEAR"){

    handleClear(event)
  }else if (divButtonText == "BACKSPACE"){

    handleBackspace(event)
  }else if (divButtonText == "="){

    handleEquals(event)
  }else {

    updateIOPanel(event);
  }

}

function handleClear(event){

  const ioPanel = document.getElementById("ioPanel")
  
  ioPanel.innerText = "";
}

// function handleOperators(event){

// }

function handleBackspace(event){

  // 1234
  // 123
  // 

  const ioPanel = document.getElementById("ioPanel")
  const ioPanelText = ioPanel.innerText

  if (ioPanelText.length > 0){

    const trimmedText 
    = ioPanelText.substring(0, (ioPanelText.length - 1));
    console.log("Trimedd Text is " + trimmedText)

    ioPanel.innerText = trimmedText;

  }

  console.log("Backspace Button clicked")

}

// function handleNumbers(event){

// }

// function handleDotButton(event){

// }

// function handleParanthesis(event){

// }

function handleEquals(event){

  const ioPanel = document.getElementById("ioPanel");

  const ioPanelText = getIOPanelContent(event);

  console.log("Equals Button clicked")

  // Empty Check
  // Invalid Expression
  // Valid Expression

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

function updateIOPanel(event){

  const ioPanel = document.getElementById("ioPanel");

  // 7
  // 8
  const divButtonText = getTextualContent(event);

  const finalTextToUpdate = 
    ioPanel.innerText + divButtonText
    // 78

  // 78
  ioPanel.innerText = finalTextToUpdate;  
}

function getTextualContent(event){

  const divButtonTarget = event.target;
  const divButtonText = divButtonTarget.innerText
  return divButtonText;
}

function getIOPanelContent(event){

  const ioPanel = document.getElementById("ioPanel");
  return ioPanel.innerText;
}

addListenersForAllButtons();