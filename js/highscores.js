import { getTask, onGetTask } from "./firebase.js";

const highScoresList = document.getElementById("highScoresList");

window.addEventListener("DOMContentLoaded", async () => {
  onGetTask((querySnapshot) => {
    let html = "";

    querySnapshot.forEach((doc) => {
      const score = doc.data();
      html += `
          <ul class="score-item">  
              <h2 class="high-score">${score.name} - ${score.score}</h2>
          </ul>
          `;
    });

    highScoresList.innerHTML = html;
  });
});
