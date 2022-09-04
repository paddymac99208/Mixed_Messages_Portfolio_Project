// window onload - run a function that displays div prompt1...
// then wait x seconds, hide that div and display div prompt2

async function displayPrompt() {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  for (let i = 0; i <= 6; i++) {
    if (i === 0) {
      document.getElementById(`prompt${i + 1}`).style.display = 'block';
      await delay(4000);
    } else if (i < 6) {
      document.getElementById(`prompt${i}`).style.display = 'none';
      document.getElementById(`prompt${i + 1}`).style.display = 'block';
      await delay(4000);
    } else if (i === 6) {
      document.getElementById(`prompt${i}`).style.display = 'none';
      document.getElementById('userInputs').style.display = 'block';
    }
  }
}

function randomNumber(value) {
  return Math.floor(Math.random() * value);
}

// Make sure number is between 1 - 70
function verifyNumber(num) {
  while (num > 69) {
    num = Math.floor(num / 2);
  }
  return num + 1;
}

const numberOne = () => {
  let x = document.getElementById('firstName').value;
  let num = x.charCodeAt(0);
  return verifyNumber(num);
};

const numberTwo = () => {
  //set min and max for index based on string length
  let x = document.getElementById('lastName').value;
  let index = Math.floor(Math.random() * x.length);
  let num = x.charCodeAt(index);
  return verifyNumber(num);
};

const numberThree = () => {
  let multiplier = 0;
  let color = document.getElementById('userColor').value;
  switch (color) {
    case 'Red':
      multiplier = 45;
      break;
    case 'Blue':
      multiplier = 128;
      break;
    case 'Green':
      multiplier = 239;
      break;
  }
  let num = randomNumber(multiplier);
  return verifyNumber(num);
};

const numberFour = () => {
  let userNumber = document.getElementById('userNumber').value;
  let num = randomNumber(userNumber);
  return verifyNumber(num);
};

const numberFive = () => {
  //birthyear - add numbers together  ie. 1+9+7+4
  let year = document.getElementById('userBirthyear').value.toString();
  let num = 0;
  for (let i = 0; i < year.length; i++) {
    num += parseInt(year[i]);
  }
  return verifyNumber(num);
};

const numberSix = () => {
  let multiplier = 0;
  let color = document.getElementById('userEyes').value;
  switch (color) {
    case 'Brown':
      multiplier = 37;
      break;
    case 'Blue':
      multiplier = 185;
      break;
    case 'Green':
      multiplier = 49;
      break;
    case 'Hazel':
      multiplier = 87;
      break;
  }
  let num = randomNumber(multiplier);
  return verifyNumber(num);
};

function generateLotteryNumber() {
  let firstNumber = numberOne();
  console.log(firstNumber);
  let secondNumber = numberTwo();
  console.log(secondNumber);
  let thirdNumber = numberThree();
  console.log(thirdNumber);
  let fourthNumber = numberFour();
  console.log(fourthNumber);
  let fifthNumber = numberFive();
  console.log(fifthNumber);
  let sixthNumber = numberSix();
  console.log(sixthNumber);
  let message = document.getElementById('lotteryNumber');
  message.style.display = 'block';
  message.innerHTML = `Your Lucky Lottery Numbers Are<br>${firstNumber} - ${secondNumber} - ${thirdNumber} - ${fourthNumber} - ${fifthNumber} - ${sixthNumber}`;
  window.scrollTo(0, document.body.scrollHeight);
}

window.onload = () => {
  displayPrompt();
};

const submitBtn = document.getElementById('lotterySubmit');
submitBtn.addEventListener('click', generateLotteryNumber);
