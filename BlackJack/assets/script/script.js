let blackjackGame = {
  you: { scoreSpan: "#your-blackjack-result", div: "#your-box", score: 0 },
  dealer: {
    scoreSpan: "#dealer-blackjack-result",
    div: "#dealer-box",
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    K: 10,
    Q: 10,
    J: 10,
    A: [1, 11],
  },
  wins: 0,
  losses: 0,
  draws: 0,
  isStand: false,
    turnsOver: false,
    isFinished:false,
  
};

const hitSound = new Audio("/sounds/swish.m4a");
const winSound = new Audio("/sounds/cash.mp3");
const lostSound = new Audio("/sounds/aww.mp3");
const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

//EventListeners
document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackJackHit);
document
  .querySelector("#blackjack-deal-button")
  .addEventListener("click", blackJackDeal);
document
  .querySelector("#blackjack-stand-button")
  .addEventListener("click", dealerLogic);

function blackJackHit() {
  if (blackjackGame["isStand"] === false) {
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
    console.log(YOU["score"]);
  }
}
function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame["cards"][randomIndex];
}

function showCard(card, activePlayer) {
  if (activePlayer["score"] <= 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `../../images/${card}.png`;
    console.log(YOU["div"]);
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    hitSound.play();
  }
}
// Deal Button
function blackJackDeal() {
    if (blackjackGame['turnsOver'] === true) {
        blackjackGame['isStand'] = false;

        removeYourImage();
        removeDealerImage();
        // showResult(computeWinner()); For 2 Player Activate it

        YOU["score"] = 0;
        DEALER["score"] = 0;
        document.querySelector("#your-blackjack-result").textContent = 0;
        document.querySelector("#dealer-blackjack-result").textContent = 0;
        document.querySelector(YOU["scoreSpan"]).style.color = "white";
        document.querySelector(DEALER["scoreSpan"]).style.color = "white";
        document.querySelector("#blackjack-result").style.color = "black";
        document.querySelector("#blackjack-result").textContent = "Let's Play";
        blackjackGame['turnsOver'] = false;
        blackjackGame['isFinished'] = false;


    }
}

function removeYourImage() {
  let yourImages = document.querySelector("#your-box").querySelectorAll("img");
  for (let image of yourImages) {
    image.remove();
  }
}

function removeDealerImage() {
  let dealerImages = document
    .querySelector("#dealer-box")
    .querySelectorAll("img");

  for (let image of dealerImages) {
    image.remove();
  }
}
//End of Deal Button

function updateScore(card, activePlayer) {
  if (card === "A") {
    //if adding 11 keeps me below 21, add 11. Otherwise, add 1
    if (activePlayer["score"] + blackjackGame["cardsMap"][card][1] <= 21) {
      activePlayer["score"] += blackjackGame["cardsMap"][card][1];
    } else {
      activePlayer["score"] += blackjackGame["cardsMap"][card][0];
    }
  } else {
    activePlayer["score"] += blackjackGame["cardsMap"][card];
  }
}

function showScore(activePlayer) {
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      activePlayer["score"];
  }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
     
}
async function dealerLogic() {
    blackjackGame['isStand'] = true;
    if (blackjackGame['isFinished'] === false) {
        while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
            let card = randomCard();
            showCard(card, DEALER);
            updateScore(card, DEALER);
            showScore(DEALER);
            await sleep(1000);
        }

        blackjackGame['turnsOver'] = true;
        let winner = computeWinner();
        showResult(winner);
    }
    blackjackGame['isFinished'] = true;

    }

//compute winner
// update for result in table
function computeWinner() {
  let winner;
  console.log(YOU["score"]);
  console.log(DEALER["score"]);
  if (YOU["score"] <= 21) {
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      blackjackGame["wins"]++;
      winner = YOU;
    } else if (YOU["score"] < DEALER["score"]) {
      blackjackGame["losses"]++;
      winner = DEALER;
    } else if (YOU["score"] === DEALER["score"]) {
      blackjackGame["draws"]++;
    }
  } else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    blackjackGame["losses"]++;
    winner = DEALER;
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    blackjackGame["draws"]++;
  }
  console.log(blackjackGame);
  return winner;
}

function showResult(winner) {
    let message, messageColor;
    if (blackjackGame['turnsOver'] === true) {
        if (winner === YOU) {
            document.querySelector("#wins").textContent = blackjackGame["wins"];
            message = "You Won!!!";
            messageColor = "green";
            winSound.play();
        } else if (winner === DEALER) {
            document.querySelector("#losses").textContent = blackjackGame["losses"];

            message = "You Lost!!";
            messageColor = "red";
            lostSound.play();
        } else {
            document.querySelector("#draws").textContent = blackjackGame["draws"];

            message = "You drew!";
            messageColor = "black";
        }
        document.querySelector("#blackjack-result").textContent = message;
        document.querySelector("#blackjack-result").style.color = messageColor;
    }
}

//For Bot Logic
