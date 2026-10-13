const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const btns = document.querySelectorAll("#game-board .btn");
const winnerPlayer = document.querySelector(".player-win");
const gameOver = document.querySelector("#game-over");
const rematchBtn = document.querySelector(".btn_rematch");

let winnerList = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let state = {
  player1: "player1",
  player2: "player2",
  answers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  turn: "x",
  winner: null,
};

function findIndex(char) {
  let indexArray = [];

  state.answers.map((c, index) => {
    if (c === char) {
      indexArray.push(index);
    }
  });

  return indexArray;
}

function checkWinner(indexArray) {
  return winnerList.some((pattern) =>
    pattern.every((pos) => indexArray.includes(pos))
  );
}

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (state.turn === "x" && !state.answers[index] && !state.winner) {
      btn.innerHTML = "X";
      state.turn = "o";
      state.answers[index] = "x";
      player1.classList.remove("active");
      player2.classList.add("active");
      const indexArrayOf = findIndex("x");
      if (checkWinner(indexArrayOf)) {
        state.winner = "x";
      }
    } else if (state.turn === "o" && !state.answers[index] && !state.winner) {
      btn.innerHTML = "O";
      state.turn = "x";
      state.answers[index] = "o";
      player2.classList.remove("active");
      player1.classList.add("active");
      const indexArrayOf = findIndex("o");
      if (checkWinner(indexArrayOf)) {
        state.winner = "o";
      }
    }

    if (state.winner && state.winner === "x") {
      gameOver.classList.remove("hidden");
      winnerPlayer.innerHTML = `${
        player1.querySelector(".player-name").innerText
      } won!`;
    } else if (state.winner && state.winner === "o") {
      gameOver.classList.remove("hidden");
      winnerPlayer.innerHTML = `${
        player2.querySelector(".player-name").innerText
      } won!`;
    }

    if (!state.answers.includes(0)) {
      gameOver.classList.remove("hidden");
      winnerPlayer.innerHTML = `It's draw`;
    }
  });
});

rematchBtn.addEventListener("click", () => {
  gameOver.classList.add("hidden");
  state.winner = null;
  state.turn = "x";
  state.answers = Array(9).fill(0);
  player2.classList.remove("active");
  player1.classList.add("active");
  btns.forEach((btn) => {
    btn.innerHTML = "";
  });
});

player1.querySelector("button").addEventListener("click", changeName);
player2.querySelector("button").addEventListener("click", changeName);

function changeName(e) {
  const btn = e.target;
  const player = btn.closest("li");
  const input = player.querySelector("input");
  const playerName = player.querySelector(".player-name");

  if (btn.innerText === "Edit") {
    btn.innerText = "Save";
    input.classList.remove("hidden");
    playerName.classList.add("hidden");
    input.value = playerName.innerText;
  } else if (btn.innerText === "Save") {
    btn.innerText = "Edit";
    playerName.innerText = input.value;
    input.classList.add("hidden");
    playerName.classList.remove("hidden");
  }

  state[player.classList[1]] = playerName.innerText;
}
