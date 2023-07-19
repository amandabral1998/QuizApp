const quizData = [
    {
      question:
        "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
  
      answer: [
        { text: "15", correct: "false" },
        { text: "16", correct: "true" },
        { text: "17", correct: "false" },
        { text: "18", correct: "false" },
      ],
    },

    {
        question:
          "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
    
        answer: [
          { text: "30%", correct: "false" },
          { text: "70%", correct: "true" },
          { text: "100%", correct: "false" },
          { text: "250%", correct: "false" },
        ],
      },

      {
        question:
          " A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
    
        answer: [
          { text: "3", correct: "false" },
          { text: "4", correct: "false" },
          { text: "5", correct: "true" },
          { text: "6", correct: "false" },
        ],
      },

      {
        question:
         "A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?",
    
        answer: [
          { text: "Rs.1090", correct: "false" },
          { text: "Rs.1160", correct: "false" },
          { text: "Rs.1190", correct: "true" },
          { text: "Rs.1202", correct: "false" },
        ],
      },

      {
        question:
          "Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen. He sold each one of them at the rate of Rs. 33. What was his percentage profit??",
    
        answer: [
          { text: "3.5", correct: "false" },
          { text: "4.5", correct: "false" },
          { text: "5.6", correct: "true" },
          { text: "6.5", correct: "false" },
        ],
      },

      {
        question:
          "On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:",
    
        answer: [
          { text: "45", correct: "false" },
          { text: "50", correct: "false" },
          { text: "55", correct: "false" },
          { text: "60", correct: "true" },
        ],
      },
   
      {
        question:
          "When a plot is sold for Rs. 18,700, the owner loses 15%. At what price must that plot be sold in order to gain 15%?",
    
        answer: [
          { text: " Rs.21,000", correct: "false" },
          { text: "Rs.22,500", correct: "false" },
          { text: "Rs.25,300", correct: "true" },
          { text: "Rs.25,800", correct: "false" },
        ],
      },

      {
        question:
          "A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:",
    
        answer: [
          { text: "5%", correct: "false" },
          { text: "8%", correct: "true" },
          { text: "10%", correct: "false" },
          { text: "12%", correct: "false" },
        ],
      },

      {
        question:
          "By selling 100 notebooks, a shopkeeper gains the selling price of 20 notebooks. What is his gain percentage?",
    
        answer: [
          { text: "15%", correct: "false" },
          { text: "25%", correct: "true" },
          { text: "30%", correct: "false" },
          { text: "32%", correct: "false" },
        ],
      },

      {
        question:
          " If an article is sold for ₹ 178 at a loss of 11%, what should be its selling price in order to earn a profit of 11%?",
    
        answer: [
          { text: "220.2", correct: "false" },
          { text: "220.5", correct: "false" },
          { text: "220.6", correct: "false" },
          { text: "220.4", correct: "true" },
        ],
      }
  ];


  const questionHeading = document.getElementById('heading-question')

  const answerBtn = document.querySelector('#answer-Buttons')

  const next = document.querySelector('.next-btn')

  const submit = document.querySelector('.sbmt-btn')

  const score = document.querySelector('#score-html')

  let currentIndex = 0;

  let scoring =0;


  function showQuestion() {
    const questionNumber =  currentIndex+1

    const question = quizData[currentIndex]

    questionHeading.innerText = `${questionNumber+ "."} ${question.question}`

    question.answer.forEach((answer)=>{
        const button = document.createElement('button')
        button.innerHTML = answer.text
        answerBtn.appendChild(button)

        if(answer.correct) {
            button.dataset.correct = answer.correct
        }

       button.addEventListener('click' , scoreCalc)
    })
  }

  showQuestion()

  function scoreCalc(e) {
    const selectedBtn = e.target

    if(selectedBtn.dataset.correct=="true") {
        scoring++
        score.innerHTML = scoring;
        selectedBtn.classList.add('correct')
    }

    else {
        selectedBtn.classList.add('incorrect')
    }

    Array.from(answerBtn.children).forEach((button)=>{
        if(button.dataset.correct == "true") {
            button.classList.add('correct')
        }

        button.disabled = true
    })
  }

  next.addEventListener('click' , ()=>{
    if(currentIndex < quizData.length -1) {
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
       location.href = "profitandloss.html"
      });
      const nextButton = document.getElementById("btnNext");
      nextButton.style.display = "block";
      nextButton.innerText = "Home";
  
      nextButton.addEventListener("click", () => {
        location.href = "index.html";
      });
  }