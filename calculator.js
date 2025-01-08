let resultDisplayed = false;

function addResult(value) {
  const resultScreen = document.getElementById("result-screen");

  if (resultDisplayed === true) {
    resultScreen.value = "";
    resultDisplayed = false;
  }

  resultScreen.value += value;
}

function calculateResult() {
  const resultScreen = document.getElementById("result-screen");
  const expression = resultScreen.value;

  try {
    const result = new Function("return " + expression)();
    resultScreen.value = result;
    resultDisplayed = true;
  } catch (error) {
    resultScreen.value = "Error";
    resultDisplayed = true;
  }
}

function clearResult() {
  const resultScreen = document.getElementById("result-screen");
  resultScreen.value = "";
  resultDisplayed = false;
}