var questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Berlin", "Rome"],
      answer: 0,
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yen", "Dollar", "Euro", "Pound"],
      answer: 0,
    },
    {
      question: "Who is the current president of the United States?",
      options: [
        "Donald Trump",
        "Barack Obama",
        "Joe Biden",
        "George W. Bush",
      ],
      answer: 2,
    },
    {
      question: "What is the largest ocean in the world?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      answer: 3,
    },
    {
      question: "What is the currency of the United Kingdom?",
      options: ["Dollar", "Pound", "Euro", "Yen"],
      answer: 1,
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Pablo Picasso",
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Rembrandt",
      ],
      answer: 2,
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      answer: 2,
    },
    {
      question: "What is the tallest mammal on Earth?",
      options: ["Elephant", "Giraffe", "Hippopotamus", "Rhino"],
      answer: 1,
    },
    {
      question: "Who wrote the Harry Potter series of books?",
      options: [
        "J.K. Rowling",
        "Stephen King",
        "George R.R. Martin",
        "Dan Brown",
      ],
      answer: 0,
    },
    {
      question: "What is the currency of Canada?",
      options: ["Dollar", "Pound", "Euro", "Yen"],
      answer: 0,
    },
    {
      question: "What is the largest desert in the world?",
      options: [
        "Sahara Desert",
        "Gobi Desert",
        "Arabian Desert",
        "Antarctica Desert",
      ],
      answer: 0,
    },
    {
      question: "Who is known as the 'King of Pop'?",
      options: [
        "Michael Jackson",
        "Elvis Presley",
        "Prince",
        "David Bowie",
      ],
      answer: 0,
    },
  ];

  var currentQuestion = 0;
  var score = 0;
  var usedQuestions = [];

  function getNextQuestion() {
    var nextQuestion = null;
    while (nextQuestion == null || usedQuestions.includes(nextQuestion)) {
      nextQuestion = Math.floor(Math.random() * questions.length);
    }
    usedQuestions.push(nextQuestion);
    return questions[nextQuestion];
  }

  function updateScore() {
    document.getElementById("score-value").textContent = score;
  }

  function displayQuestion() {
    var question = getNextQuestion();
    document.getElementById("question").textContent = question.question;
    document.getElementById("result").textContent = "";
    document.getElementById("options").innerHTML = "";
    for (var i = 0; i < question.options.length; i++) {
      var option = document.createElement("div");
      option.textContent = question.options[i];
      option.classList.add("option");
      option.setAttribute("data-index", i);
      option.addEventListener("click", handleOptionClick);
      document.getElementById("options").appendChild(option);
    }
  }

  function handleOptionClick(event) {
    var selectedOption = parseInt(event.target.getAttribute("data-index"));
    var question = questions[usedQuestions[currentQuestion]];
    if (selectedOption == question.answer) {
      score++;
      updateScore();
      document.getElementById("result").textContent = "Correct!";
    } else {
      document.getElementById("result").textContent = "Incorrect!";
    }
    currentQuestion++;
    if (currentQuestion == 10) {
      endGame();
    } else {
      document.getElementById("score").style.display = "block"; 
      document.getElementById("score-value").textContent = score; 
      setTimeout(function () {
        displayQuestion();
        document.getElementById("score").style.display = "none"; 
      }, 1000);
    }
  }

  function endGame() {
    document.getElementById("question").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("end").style.display = "block";
    document.getElementById("score").style.display = "block";
    document.getElementById("score-value").textContent = score;
    document.getElementById("restart").style.display = "block";
    document.getElementById("restart").addEventListener("click", startGame);
  }

  function startGame() {
    currentQuestion = 0;
    score = 0;
    usedQuestions = [];
    document.getElementById("question").style.display = "block";
    document.getElementById("options").style.display = "block";
    document.getElementById("end").style.display = "none";
    document.getElementById("score").style.display = "none";
    document.getElementById("restart").style.display = "none";
    displayQuestion();
  }

  startGame();