const quizData = [
  {
    question:
      " Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?",

    answer: [
      { text: "2 time", correct: "true" },
      { text: "3 time", correct: "false" },
      { text: "4 time", correct: "false" },
      { text: "5 time", correct: "false" },
    ],
  },

  {
    question:
      " The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",

    answer: [
      { text: "4 yrs", correct: "true" },
      { text: "8 yrs", correct: "false" },
      { text: "7 yrs", correct: "false" },
      { text: "5 yrs", correct: "false" },
    ],
  },

  {
    question:
      " A father said to his son, I was as old as you are at the present at the time of your birth. If the father's age is 38 years now, the son's age five years back was",

    answer: [
      { text: "14 yrs", correct: "true" },
      { text: "19 yrs", correct: "false" },
      { text: "33 yrs", correct: "false" },
      { text: "38 yrs", correct: "false" },
    ],
  },

  {
    question:
      " A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",

    answer: [
      { text: "7", correct: "false" },
      { text: "8", correct: "false" },
      { text: "9", correct: "false" },
      { text: "10", correct: "true" },
    ],
  },

  {
    question:
      " Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",

    answer: [
      { text: "24", correct: "true" },
      { text: "27", correct: "false" },
      { text: "40", correct: "false" },
      { text: "15", correct: "false" },
    ],
  },

  {
    question:
      " A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is",

    answer: [
      { text: "44", correct: "false" },
      { text: "18", correct: "false" },
      { text: "20", correct: "false" },
      { text: "22", correct: "true" },
    ],
  },

  {
    question:
      " Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?",

    answer: [
      { text: "16 yrs", correct: "true" },
      { text: "18 yrs", correct: "false" },
      { text: "20 yrs", correct: "false" },
      { text: "22 yrs", correct: "false" },
    ],
  },

  {
    question:
      " The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:",

    answer: [
      { text: "12 yrs", correct: "false" },
      { text: "18 yrs", correct: "false" },
      { text: "20 yrs", correct: "true" },
      { text: "25 yrs", correct: "false" },
    ],
  },

  {
    question:
      "  At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present ?",

    answer: [
      { text: "12 yrs", correct: "false" },
      { text: "15yrs", correct: "true" },
      { text: "19 yrs", correct: "false" },
      { text: "21 yrs", correct: "false" },
    ],
  },

  {
    question:
      " Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?",

    answer: [
      { text: "16 yrs", correct: "false" },
      { text: "18 yrs", correct: "false" },
      { text: "24 yrs", correct: "false" },
      { text: "24.5 yrs", correct: "true" },
    ],
  },
];

const questionHeading = document.getElementById("heading-question");

const answerBtn = document.querySelector("#answer-Buttons");

const next = document.querySelector(".next-btn");

const submit = document.querySelector(".sbmt-btn");

const score = document.querySelector("#score-html");

let currentIndex = 0;

let scoring = 0;

function showQuestion() {
  const questionNumber = currentIndex + 1;

  const question = quizData[currentIndex];

  questionHeading.innerHTML = `${questionNumber + "."} ${question.question}`;

  question.answer.forEach((answers) => {
    const button = document.createElement("button");
    button.innerHTML = answers.text;
    answerBtn.appendChild(button);
    if (answers.correct) {
      button.dataset.correct = answers.correct;
    }

    button.addEventListener("click", scoreCalc);
  });
}

showQuestion();

function scoreCalc(e) {
  const selectedBTn = e.target;

  if (selectedBTn.dataset.correct == "true") {
    scoring++;
    score.innerHTML = scoring;
    selectedBTn.classList.add("correct");
  } else {
    selectedBTn.classList.add("incorrect");
  }

  Array.from(answerBtn.children).forEach((button)=>{
  if(button.classList.correct == "true") {
    button.classList.add('correct')
  }
  button.disabled= true
  })
}


next.addEventListener('click' , ()=>{
  if(currentIndex <quizData.length -1) {
      currentIndex++
      answerBtn.innerHTML = ""
      showQuestion()
  }

  else {
      next.style.display = "none"
      submit.style.display= "block"
      submit.addEventListener('click', reset)
  }
})

function reset() {
  questionHeading.innerHTML = ` <div> ${localStorage.getItem(
      "player"
    )} :- You Scored ${scoring} out of ${quizData.length} </div>`;
  
    questionHeading.style.marginTop = "60px"

    document.querySelector('.score').style.display = "none"
  
  answerBtn.style.display = "none"

  const submit = document.getElementById("btnSubmit");
    submit.innerText = "Play Again";

    submit.addEventListener("click", () => {
     location.href = "problemonages.html"
    });
    const nextButton = document.getElementById("btnNext");
    nextButton.style.display = "block";
    nextButton.innerText = "Home";

    nextButton.addEventListener("click", () => {
      location.href = "index.html";
    });
}