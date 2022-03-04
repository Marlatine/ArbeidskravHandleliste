//  Welcome message:

alert(
  `Hei og velkommen til din handleoversikt! Her har du 3 forskjellige lister hvor du kan fylle ut hva slags varer du har, hva du begynner å gå tom for og hva du trenger å handle. Fyll inn feltene og få din egen oversikt!`
);

// What you already have list functions

let alreadyHaveArray = [];

let whatYouHaveList = document.getElementById("what-you-have-list");

function addWhatYouHave() {
  let alreadyHaveInput = document.getElementById("already-have-input").value;

  alreadyHaveArray.push({
    name: alreadyHaveInput,
  });

  listWhatYouHave();
}

function listWhatYouHave() {
  whatYouHaveList.innerHTML = "";
  for (let i = 0; i < alreadyHaveArray.length; i++) {
    whatYouHaveList.innerHTML += `<li> ${alreadyHaveArray[i].name} <button id="delete-btn" onclick="deleteWhatYouHave(${i})"><i class="fas fa-regular fa-trash"></i></button> </li>`;
  }
}

function deleteWhatYouHave(i) {
  let userAnswer = prompt(
    `Vil du slette ${alreadyHaveArray[i].name}? Skriv ja eller nei:`
  );
  if (userAnswer == "ja") {
    alreadyHaveArray.splice(i, 1);
    listWhatYouHave();
  } else {
    listWhatYouHave();
  }
}

// Almost empty list functions

let almostEmptyArray = [];

let almostEmptyList = document.getElementById("almost-empty-list");

function addAlmostEmpty() {
  let almostEmptyInput = document.getElementById("almost-empty-input").value;

  almostEmptyArray.push({
    name: almostEmptyInput,
  });

  listAlmostEmpty();
}

function listAlmostEmpty() {
  almostEmptyList.innerHTML = "";
  for (let i = 0; i < almostEmptyArray.length; i++) {
    almostEmptyList.innerHTML += `<li> ${almostEmptyArray[i].name} <button id="delete-btn" onclick="deleteAlmostEmpty(${i})"><i class="fas fa-regular fa-trash"></i></button> </li>`;
  }
}

function deleteAlmostEmpty(i) {
  let userAnswer = prompt(
    `Vil du slette ${almostEmptyArray[i].name}? Skriv ja eller nei:`
  );
  if (userAnswer == "ja") {
    almostEmptyArray.splice(i, 1);
    listAlmostEmpty();
  } else {
    listAlmostEmpty();
  }
}

// Have to buy more list functions

let mustHaveArray = [];
let mustHaveList = document.getElementById("must-have-list");
let groceryPrice = 0;

function addWhatYouNeed() {
  let needInput = document.getElementById("need-input").value;
  let groceryPriceInput = parseInt(
    document.getElementById("price-input").value
  );

  mustHaveArray.push({
    name: needInput,
    price: groceryPriceInput,
  });

  if (groceryPriceInput === 0 || groceryPriceInput === "") {
    alert("Error! Du må skrive inn pris!");
    mustHaveArray.pop();
    return;
  } else if (isNaN(groceryPriceInput)) {
    alert("Error! Du må skrive tall i prisfelt!");
    mustHaveArray.pop();
    return;
  }

  listWhatYouNeed();
}

function listWhatYouNeed() {
  mustHaveList.innerHTML = "";
  for (let i = 0; i < mustHaveArray.length; i++) {
    mustHaveList.style.wordSpacing = "50px";
    mustHaveList.innerHTML += `<li> ${mustHaveArray[i].name} ${mustHaveArray[i].price},- <button id="delete-btn" onclick="deleteMustHave(${i})"><i class="fas fa-regular fa-trash"></i></button> </li>`;
  }

  // The total price of all the groceries

  let total = 0;
  for (let i = 0; i < mustHaveArray.length; i++) {
    total += mustHaveArray[i].price;
    document.getElementById(
      "total-price"
    ).innerHTML = `Total pris på varer: ${total},-`;
  }
}

function deleteMustHave(i) {
  let userAnswer = prompt(
    `Vil du slette ${mustHaveArray[i].name}? Skriv ja eller nei:`
  );
  if (userAnswer == "ja") {
    mustHaveArray.splice(i, 1);
    listWhatYouNeed();
  } else {
    listWhatYouNeed();
  }
}
