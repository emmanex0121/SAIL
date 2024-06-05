let valueIsPresent = false;

// const numbers = document.querySelectorAll(".number");
let customInput = document.getElementById("input-box");
let clearInput = document.getElementById("clear");
customInput.value = 0;

function toggleClear() {
  //  Function that clears the input box
  if (customInput.value.length > 1 || customInput.value != "0") {
    clearInput.innerHTML = "C";
  } else {
    clearInput.innerHTML = "AC";
  }
}
toggleClear();

function removeTrailingZeros(num) {
  // Convert the number to a string using toPrecision to handle precision
  let numStr = num.toPrecision(15); // Adjust precision if needed

  // Remove trailing zeros and unnecessary decimal points
  numStr = numStr.replace(/\.?0+$/, ""); // Remove trailing zeros and optional decimal point
  numStr = numStr.replace(/(\.\d*?[1-9])0+$/, "$1"); // Remove trailing zeros after the decimal point

  // Convert back to number if necessary
  return numStr.includes(".") ? parseFloat(numStr) : parseInt(numStr);
}

function performOperation(num1, operator, num2) {
  // if (num1.includes('-') && num2.includes('-')){
  //     num1 = num1.replace('-', '');
  //     num2 = num2
  // }
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  let operation = NaN;

  if (operator === "+") {
    operation = num1 + num2;
  } else if (operator === "-") {
    operation = num1 - num2;
  } else if (operator === "x") {
    operation = num1 * num2;
  } else if (operator === "/") {
    operation = num1 / num2;
  }

  operation = removeTrailingZeros(operation);
  return operation;
}

function clickMe(value) {
  const valueType = typeof value;
  toggleClear();
  //   let num = 0;

  if (valueType === "number") {
    if (customInput.value === "0") {
      if (
        customInput.value.length === 1 ||
        sessionStorage.getItem("operator")
      ) {
        customInput.value = value;
      }
    } else {
      //   num += 1;
      //   if (sessionStorage.getItem("value1") === customInput.value) {
      console.log(valueIsPresent);
      if (valueIsPresent === true) {
        customInput.value = value;
        valueIsPresent = false;
        console.log("numm", valueIsPresent);
      } else {
        customInput.value += value;
      }
    }
  } else {
    switch (value) {
      case ".":
        if (customInput.value.includes(value)) {
          return;
        } else {
          customInput.value += value;
        }
        break;
      case "clear":
        // const clearInput = document.getElementById("clear");
        if (clearInput.innerHTML === "C") {
          customInput.value = 0;
          clearInput.innerHTML === "AC";
        } else {
          customInput.value = 0;
          clearInput.innerHTML = "AC";
        }
        sessionStorage.removeItem("value1");
        sessionStorage.removeItem("operator");
        break;
      case "plus_minus":
        if (customInput.value !== "0" && !customInput.value.includes("-")) {
          customInput.value = "-" + customInput.value;
        }
        break;
      case "percent":
        if (customInput.value != "0") {
          //   let valueInt = (customInput.value, 10);
          if (customInput.value.includes("-")) {
            console.log("working");
            let customVal = customInput.value;
            customVal = customVal.replace("-", "");
            if (customVal.includes(".")) {
              customVal = parseFloat(customVal, 10);
              let percentage = customVal / 100;
              console.log(percentage);
              percentage = removeTrailingZeros(percentage);
              console.log(percentage);
              customInput.value = "-" + percentage;
            } else {
              customVal = parseInt(customVal, 10);
              let percentage = customVal / 100;
              customInput.value = "-" + percentage;
            }
          } else {
            let customVal = customInput.value;
            if (customVal.includes(".")) {
              customVal = parseFloat(customVal, 10) / 100;
              console.log(customVal);
              let percentage = removeTrailingZeros(customVal);
              console.log(percentage);
              customInput.value = percentage;
            } else {
              customVal = parseInt(customVal, 10);
              customInput.value = customVal / 100;
            }
          }
        }
        break;
      case "divide":
        if (customInput.value !== "0") {
          sessionStorage.setItem("value1", customInput.value);
          sessionStorage.setItem("operator", "/");

          valueIsPresent = true;
          //   num = 1;
          //   customInput.value = 0;
        }
        break;
      case "multiply":
        if (customInput.value !== "0") {
          sessionStorage.setItem("value1", customInput.value);
          sessionStorage.setItem("operator", "x");

          //   num = 1;
          valueIsPresent = true;
          //   customInput.value = 0;
        }
        break;
      case "subtract":
        if (customInput.value !== "0") {
          sessionStorage.setItem("value1", customInput.value);
          sessionStorage.setItem("operator", "-");

          //   num = 1;
          valueIsPresent = true;
          console.log(valueIsPresent);
          //   customInput.value = 0;
        }
        break;
      case "add":
        if (customInput.value !== "0") {
          sessionStorage.setItem("value1", customInput.value);
          sessionStorage.setItem("operator", "+");

          //   num = 1;
          valueIsPresent = true;
        }
        break;
      case "equals":
        if (customInput !== "0" && sessionStorage.getItem("value1")) {
          let value1 = sessionStorage.getItem("value1");
          let operator = sessionStorage.getItem("operator");
          let value2 = customInput.value;
          let solution = performOperation(value1, operator, value2);

          customInput.value = solution;
          valueIsPresent = false;

          sessionStorage.removeItem("value1");
          sessionStorage.removeItem("operator");
          break;
        }
    }
  }
}

customInput.addEventListener("change", () => {
  console.log("hehehehehe");
  if (customInput.length != 0) {
    toggleClear();
  }
});
// console.log(customInput);
