//screen
let input = $("#display");
let screen = document.getElementById("display");
//number buttons
let buttons = $(".buttons");
//change recharge pin button
let changePin = $("button");
//delete btn
let deletebtn = $("#delete");
//copy button
let copyBtn = $("#copyBtn");
//tooltiptext
let tooltip = $(".tooltiptext");
//the place where the current recharge pin is displayed
let rechargePinText = $("#rechargePinText");
//dial page for recharge and check account balance and all direct replies
let dialText = $("#dialText");
let dialTextBg = $("#dialTextbg");
let okbtn = $("#ok");
//data Home page
let dataHomePage = $("#dataHomePage");
let dataHomePageInput = document.getElementById("dataHomePageInput");
let dataHomePageReply = $("#dataHomePageBtnReply");
let dataHomePageCancel = $("#dataHomePageBtnCancel");
//daily data page
let dailyDataPage = $("#dailyDataPage");
let dailyDataPageInput = document.getElementById("dailyDataPageInput");
let dailyDataPageReply = $("#dailyDataPageBtnReply");
let dailyDataPageCancel = $("#dailyDataPageBtnCancel");
//weekly data page
let weeklyDataPage = $("#weeklyDataPage");
let weeklyDataPageInput = document.getElementById("weeklyDataPageInput");
let weeklyDataPageReply = $("#weeklyDataPageBtnReply");
let weeklyDataPageCancel = $("#weeklyDataPageBtnCancel");
//monthly data page
let monthlyDataPage = $("#monthlyDataPage");
let monthlyDataPageInput = document.getElementById("monthlyDataPageInput");
let monthlyDataPageReply = $("#monthlyDataPageBtnReply");
let monthlyDataPageCancel = $("#monthlyDataPageBtnCancel");
//Home btn
let callBtn = $("#callButton");
//the place where current time is
let time = $("#time");
//initial account balance
let accountBalance = 0.0;
//initial data balance
let dataBalance = 0;
//check if recharge pin has been copied
let pastebtn = $("#pasteButton")
let copied = true;
let nocopied = 0;
//recharge number array
let cash = [100, 200, 500, 1000];
const pickAmount = () => {
  return cash[Math.floor(Math.random() * 4)];
};

let rechargePin = [];
let rechargePinNumber;
//to get the time at the top of the screen
let today = new Date();
const getMinutes = () => {
  if (today.getMinutes() > 9) {
    return today.getMinutes();
  } else {
    return "0" + today.getMinutes();
  }
};
time.html(`${today.getHours()}:${getMinutes()}`);

//Hiding all the pop-up boxes
dialTextBg.hide();
dataHomePage.hide();
dailyDataPage.hide();
weeklyDataPage.hide();
monthlyDataPage.hide();

//making the font size of the display screen shrink as more numbers are typed
const textSize = () => {
  let l = screen.value.length;
  let calc = 2 - 0.035 * l;
  if (l > 25) {
    input.css({
      fontSize: `${2 - 0.035 * 25}rem`,
    });
  } else if (l > 1) {
    input.css({
      fontSize: `${calc}rem`,
    });
  } else {
    input.css({
      fontSize: `${2}rem`,
    });
  }
};
const copy = () => {
  if (nocopied < 1) {
    if (copied == false) {
      copied = true;
      navigator.clipboard.writeText(rechargePinNumber);
      tooltip.text("COPIED");
      nocopied++;
    } else {
      copied = false;
      navigator.clipboard.writeText("");
      tooltip.text("Copy to clipboard");
    }
  }
};
const paste = () => {
  if (nocopied == 1) {
    screen.value+=rechargePinNumber
    ;
  }
};
//generating and writing the initial richarge pin text;
const getRechargePin = () => {
  if (rechargePin.length == 0) {
    for (let i = 0; i <= 12; i++) {
      rechargePin.push(Math.floor(Math.random() * 10));
    }
  } else {
    rechargePin = [];
    for (let i = 0; i <= 12; i++) {
      rechargePin.push(Math.floor(Math.random() * 10));
    }
  }
  rechargePinNumber = rechargePin.join("");
  rechargePinText.html(
    `<p>Your Recharge pin is</p>  <h1> ${rechargePinNumber}</h1>`
  );
  nocopied = 0;
  copy();
};
getRechargePin();

//copy function

copyBtn.click(() => {
  copy();
});
pastebtn.click(()=>{
  paste()
})
//creating the functions that follow when the call button is clicked on
const call = () => {
  if (screen.value.length > 0) {
    if (screen.value == `*312*${rechargePinNumber}#`) {
      let amount = pickAmount();
      accountBalance += amount;
      dialText.text(
        `Your recharge of ${amount} was successful\n Your Account balance is #${accountBalance}`
      );
      getRechargePin();
      dialTextBg.show();
      screen.value = "";
    } else if (screen.value == "*313#") {
      dialText.text(`Your Account balance is #${accountBalance}`);
      dialTextBg.show();
      screen.value = "";
    } else if (screen.value == "*#") {
      accountBalance += 1000;
      dialText.text(`Your Account balance is #${accountBalance}`);
      dialTextBg.show();
      screen.value = "";
    } else if (screen.value == "*314#") {
      dialText.text(`Your Data Balance is ${dataBalance}MB`);
      dialTextBg.show();
      screen.value = "";
    } else if (screen.value == "*300#") {
      dataHomePage.show();
      dataHomePageInput.focus();
    } else {
      dialText.text(`You have entered an inavlid input`);
      dialTextBg.show();
      screen.value = "";
    }
  } else {
    console.log("you have not entered any information");
  }
};

//making the button that cahnges the recharge pin
changePin.click(() => {
  getRechargePin();
});

//setting the initial font of the screen
input.css({
  fontSize: `${2}rem`,
});

//making the delete button work
deletebtn.click(() => {
  if (screen.value.length > 0) {
    let arr = screen.value.split("");
    arr.pop();
    screen.value = arr.join("");
  }
});

//to change the font-size whenever numbers are added to the screen
screen.addEventListener("input", textSize);

//to make the number  buttons work properly
for (const btn of buttons) {
  btn.addEventListener("click", () => {
    screen.value += btn.textContent;
    textSize();
  });
}
//make the call button clickable
callBtn.click(() => {
  call();
});

//to hide the recharge and account balance after viewed
okbtn.click(() => {
  dialTextBg.hide();
});
//when cancel is pressed on data home page
dataHomePageCancel.click(() => {
  dataHomePage.hide();
  screen.value = "";
});
//when cancel is pressed in daily data page
dailyDataPageCancel.click(() => {
  dailyDataPage.hide();
  screen.value = "";
});
//when cancel is pressed in weekly data page
weeklyDataPageCancel.click(() => {
  weeklyDataPage.hide();
  screen.value = "";
});
//when cancel is pressed in monthly data page
monthlyDataPageCancel.click(() => {
  monthlyDataPage.hide();
  screen.value = "";
});
//when a reply is put on data home page
dataHomePageReply.click(() => {
  switch (dataHomePageInput.value) {
    case "1":
      dataHomePage.hide();
      dailyDataPage.show();
      dailyDataPageInput.focus();
      break;
    case "2":
      dataHomePage.hide();
      weeklyDataPage.show();
      break;
    case "3":
      dataHomePage.hide();
      monthlyDataPage.show();
      break;
    default:
      dialText.text(`You have entered an Invalid Input.`);
      dataHomePage.hide();
      dialTextBg.show();
      screen.value = "";
      break;
  }
});

//daily data page reply
dailyDataPageReply.click(() => {
  switch (dailyDataPageInput.value) {
    case "1":
      dailyDataPage.hide();
      if (accountBalance >= 50) {
        dataBalance += 40;
        accountBalance -= 50;
        dialText.text(
          "You have successfully purchased 40MB worth of data for your browsing pleasure"
        );
        dialTextBg.show();
        screen.value = "";
      } else {
        dialText.text(
          "You have insufficient funds to carry out this transaction"
        );
        dialTextBg.show();
        screen.value = "";
      }
      break;
    case "2":
      dailyDataPage.hide();
      if (accountBalance >= 100) {
        dataBalance += 100;
        accountBalance -= 100;
        dialText.text(
          "You have successfully purchased 100MB worth of data for your browsing pleasure"
        );
        dialTextBg.show();
        screen.value = "";
      } else {
        dialText.text(
          "You have insufficient funds to carry out this transaction"
        );
        dialTextBg.show();
        screen.value = "";
      }
      break;
    case "3":
      dailyDataPage.hide();
      if (accountBalance >= 200) {
        dataBalance += 250;
        accountBalance -= 200;
        dialText.text(
          "You have successfully purchased 250MB worth of data for your browsing pleasure"
        );
        dialTextBg.show();
        screen.value = "";
      } else {
        dialText.text(
          "You have insufficient funds to carry out this transaction"
        );
        dialTextBg.show();
        screen.value = "";
      }
      break;
    case "4":
      dailyDataPage.hide();
      if (accountBalance >= 300) {
        dataBalance += 1024;
        accountBalance -= 300;
        dialText.text(
          "You have successfully purchased 1GB worth of data for your browsing pleasure"
        );
        dialTextBg.show();
        screen.value = "";
      } else {
        dialText.text(
          "You have insufficient funds to carry out this transaction"
        );
        dialTextBg.show();
        screen.value = "";
      }
      break;
    default:
      dialText.text(`You have entered an Invalid Input.`);
      dailyDataPage.hide();
      dialTextBg.show();
      screen.value = "";
      break;
  }
});

//weekly data page reply
weeklyDataPageReply.click(() => {
  switch (weeklyDataPageInput.value) {
    case "1":
      weeklyDataPage.hide();
      if (accountBalance >= 300) {
        dataBalance += 350;
        accountBalance -= 300;
        dialText.text(
          "You have successfully purchased 350MB worth of data for your browsing pleasure"
        );
        dialTextBg.show();
        screen.value = "";
      } else {
        dialText.text(
          "You have insufficient funds to carry out this transaction"
        );
        dialTextBg.show();
        screen.value = "";
      }
      break;
    case "2":
      weeklyDataPage.hide();
      if (accountBalance >= 500) {
        dataBalance += 1500;
        accountBalance -= 500;
        dialText.text(
          "You have successfully purchased 1.5GB worth of data for your browsing pleasure"
        );
        dialTextBg.show();
        screen.value = "";
      } else {
        dialText.text(
          "You have insufficient funds to carry out this transaction"
        );
        dialTextBg.show();
        screen.value = "";
      }
      break;
    case "3":
      weeklyDataPage.hide();
      if (accountBalance >= 500) {
        dataBalance += 750;
        accountBalance -= 500;
        dialText.text(
          "You have successfully purchased 750MB worth of data for your browsing pleasure"
        );
        dialTextBg.show();
        screen.value = "";
      } else {
        dialText.text(
          "You have insufficient funds to carry out this transaction"
        );
        dialTextBg.show();
        screen.value = "";
      }
      break;
    case "4":
      weeklyDataPage.hide();
      if (accountBalance >= 1500) {
        dataBalance += 6000;
        accountBalance -= 1000;
        dialText.text(
          "You have successfully purchased 6GB worth of data for your browsing pleasure"
        );
        dialTextBg.show();
        screen.value = "";
      } else {
        dialText.text(
          "You have insufficient funds to carry out this transaction"
        );
        dialTextBg.show();
        screen.value = "";
      }
      break;
    default:
      dialText.text(`You have entered an Invalid Input.`);
      weeklyDataPage.hide();
      dialTextBg.show();
      screen.value = "";
      break;
  }
});

//monthly data page reply
monthlyDataPageReply.click(() => {
  switch (monthlyDataPageInput.value) {
    case "1":
      monthlyDataPage.hide();
      if (accountBalance >= 1000) {
        dataBalance += 1500;
        accountBalance -= 1000;
        dialText.text(
          "You have successfully purchased 1.5GB worth of data for your browsing pleasure"
        );
        dialTextBg.show();
        screen.value = "";
      } else {
        dialText.text(
          "You have insufficient funds to carry out this transaction"
        );
        dialTextBg.show();
        screen.value = "";
      }
      break;
    case "2":
      monthlyDataPage.hide();
      if (accountBalance >= 1200) {
        dataBalance += 2048;
        accountBalance -= 1200;
        dialText.text(
          "You have successfully purchased 2GB worth of data for your browsing pleasure"
        );
        dialTextBg.show();
        screen.value = "";
      } else {
        dialText.text(
          "You have insufficient funds to carry out this transaction"
        );
        dialTextBg.show();
        screen.value = "";
      }
      break;
    case "3":
      monthlyDataPage.hide();
      if (accountBalance >= 2000) {
        dataBalance += 4500;
        accountBalance -= 2000;
        dialText.text(
          "You have successfully purchased 4.5GB worth of data for your browsing pleasure"
        );
        dialTextBg.show();
        screen.value = "";
      } else {
        dialText.text(
          "You have insufficient funds to carry out this transaction"
        );
        dialTextBg.show();
        screen.value = "";
      }
      break;
    case "4":
      monthlyDataPage.hide();
      if (accountBalance >= 2500) {
        dataBalance += 6000;
        accountBalance -= 2500;
        dialText.text(
          "You have successfully purchased 6GB worth of data for your browsing pleasure"
        );
        dialTextBg.show();
        screen.value = "";
      } else {
        dialText.text(
          "You have insufficient funds to carry out this transaction"
        );
        dialTextBg.show();
        screen.value = "";
      }
      break;
    default:
      dialText.text(`You have entered an Invalid Input.`);
      monthlyDataPage.hide();
      dialTextBg.show();
      screen.value = "";
      break;
  }
});
