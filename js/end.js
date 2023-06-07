import { saveTask } from "./firebase.js";

window.addEventListener("DOMContentLoaded", () => {

});


const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.querySelector("#finalScore");

finalScore.value = mostRecentScore;

// const username = document.querySelector("#username");
// const saveScoreBtn = document.querySelector("#saveScoreBtn");

const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const score = taskForm['finalScore']
    const name = taskForm['username']

    saveTask(name.value, score.value)

})