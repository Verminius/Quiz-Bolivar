const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question:
      "¿Cuál de las siguientes opciones es una buena forma de reducir el estrés?",
    choice1: "Comer en exceso",
    choice2: "Hacer ejercicio",
    choice3: "Ver televisión todo el día",
    choice4: "Dormir todo el día",
    answer: 2,
  },
  {
    question: "¿Cuántas horas de sueño se recomiendan para adultos?",
    choice1: "4-5 horas",
    choice2: "6-7 horas",
    choice3: "8-9 horas",
    choice4: "12-26 horas",
    answer: 3,
  },
  {
    question:
      "¿Qué porcentaje de la dieta diaria debe consistir en frutas y verduras?",
    choice1: "10%",
    choice2: "25%",
    choice3: "50%",
    choice4: "75%",
    answer: 3,
  },
  {
    question:
      "¿Cuál de las siguientes opciones no es una buena forma de mantener una buena higiene bucal?",
    choice1: "Cepillarse los dientes después de cada comida",
    choice2: "Usar hilo dental ",
    choice3: "No cepillarse los dientes",
    choice4: "Usar enjuague bucal",
    answer: 3,
  },
  {
    question: "¿Cuántos vasos de agua se recomienda beber al día?",
    choice1: "1-2 vasos",
    choice2: "6-8 vasos",
    choice3: "10-12 vasos",
    choice4: "Ninguno",
    answer: 2,
  },
  {
    question:
      "¿Qué porcentaje de la dieta diaria debe consistir en carbohidratos complejos?",
    choice1: "10%",
    choice2: "25%",
    choice3: "50%",
    choice4: "5%",
    answer: 3,
  },
  {
    question:
      "¿Cuál de las siguientes opciones es una buena forma de prevenir lesiones deportivas?",
    choice1: "Estirar adecuadamente antes de hacer ejercicio",
    choice2: "Hacer ejercicio sin calentar primero ",
    choice3: "Comer alimentos pesados antes de hacer ejercicio",
    choice4: "Dormir todo el día",
    answer: 1,
  },
  {
    question: "¿Cuánto tiempo se recomienda hacer ejercicio al día?",
    choice1: "10-15 minutos",
    choice2: "30-60 minutos ",
    choice3: "2-3 horas",
    choice4: "5-8 minutos",
    answer: 2,
  },
  {
    question:
      "¿Cuál de las siguientes opciones es una buena forma de mantener un peso saludable?",
    choice1: "Comer en exceso",
    choice2: "Hacer ejercicio regularmente",
    choice3: "No hacer nada",
    choice4: "Ver televisión todo el día",
    answer: 2,
  },
  {
    question: "¿Cuántas veces a la semana se recomienda hacer ejercicio?",
    choice1: "1-2 veces",
    choice2: "3-4 veces",
    choice3: "5-7 veces",
    choice4: "1 vez",
    answer: 2,
  },
];

const SCORE_POINTS = 1;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestions();
};

getNewQuestions = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("/end.html");
  }

  questionCounter++;
  progressText.innerText = `Pregunta ${questionCounter} de ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestions();
    }, 800);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
