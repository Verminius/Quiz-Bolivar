window.addEventListener("DOMContentLoaded", () => {});

const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.querySelector("#finalScore");

finalScore.innerText = mostRecentScore;

const username = document.querySelector("#username");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
