const images = document.querySelectorAll(".img-cho");
const rulesBtn = document.querySelector(".rules-btn");
const closeBtn = document.querySelector(".close-btn");
const playAgainBtn = document.querySelector(".paly-again");
const rulesPopup = document.querySelector(".rules");
const gameBoard = document.querySelector(".game");
const mainBoard = document.querySelector(".main");
const choiceBoard = document.querySelector(".choice");
const playerChoice = document.querySelector(".choice-1");
const pcChoice = document.querySelector(".choice-2");
const resultMsg = document.querySelector(".play-again h3");
const resultNum = document.querySelector(".score span");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const imgaesSrc = [];
let pcImageSrc;
resultNum.textContent = 0;
// to choose pc img
images.forEach((img) => {
  imgaesSrc.push(img.getAttribute("src"));
});
pcchoice();
// to show rules
rulesBtn.addEventListener("click", () => {
  rulesPopup.classList.remove("hide");
});
// to hide rules
closeBtn.addEventListener("click", () => {
  rulesPopup.classList.add("hide");
});
// when player choose
mainBoard.addEventListener("click", (e) => {
  if (e.target.closest(".box")) {
    playerChoice.src = e.target
      .closest(".box")
      .querySelector("img")
      .getAttribute("src");

    mainBoard.classList.add("hide");
    choiceBoard.classList.remove("hide");
    border(
      e.target.closest(".box").querySelector("img").getAttribute("src"),
      playerChoice
    );
  }
  pcchoice();
  won(playerChoice, pcChoice);
  console.log(playerChoice, pcChoice);
});
playAgainBtn.addEventListener("click", () => {
  mainBoard.classList.remove("hide");
  choiceBoard.classList.add("hide");
});

// function to change the color border of the choice
function border(choice, borderOwner) {
  if (choice === "images/icon-paper.svg") {
    borderOwner.style.borderColor = "var(--paper-gradient)";
  } else if (choice === "images/icon-rock.svg") {
    borderOwner.style.borderColor = "var(--rock-gradient)";
  } else if (choice === "images/icon-scissors.svg") {
    borderOwner.style.borderColor = "var(--scissors-gradient)";
  }
}

// function to choose for pc

function pcchoice() {
  pcImageSrc = imgaesSrc[Math.floor(Math.random() * imgaesSrc.length)];
  pcChoice.src = pcImageSrc;
  border(pcImageSrc, pcChoice);
}

function won(player, pc) {
  if (player.getAttribute("src") !== pc.getAttribute("src")) {
    if (player.getAttribute("src") === "images/icon-paper.svg") {
      if (pc.getAttribute("src") === "images/icon-rock.svg") {
        player1.classList.add("won");
        player2.classList.remove("won");
        resultMsg.textContent = "you won";
        resultNum.textContent++;
      } else {
        player2.classList.add("won");
        player1.classList.remove("won");
        resultMsg.textContent = "you lost";
      }
    } else if (player.getAttribute("src") === "images/icon-rock.svg") {
      if (pc.getAttribute("src") === "images/icon-paper.svg") {
        resultMsg.textContent = "you lost";
        player2.classList.add("won");
        player1.classList.remove("won");
      } else {
        player1.classList.add("won");
        player2.classList.remove("won");
        resultMsg.textContent = "you won";
        resultNum.textContent++;
      }
    } else {
      if (pc.getAttribute("src") === "images/icon-rock.svg") {
        player2.classList.add("won");
        player1.classList.remove("won");
        resultMsg.textContent = "you lost";
      } else {
        player1.classList.add("won");
        player2.classList.remove("won");
        resultMsg.textContent = "you won";
        resultNum.textContent++;
      }
    }
  } else {
    resultMsg.textContent = "its a tie";
    player1.classList.add(".won");
    player2.classList.remove("won");
  }
}
