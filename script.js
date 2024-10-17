const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Malta", "Vatican City", "San Marino"],
        answer: "Vatican City"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
        answer: "Hydrogen"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
        answer: "Tokyo"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: "Blue Whale"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const startContainer = document.getElementById("start-container");
const quizContainer = document.getElementById("quiz-container");
const questionNumberElement = document.getElementById("question-number");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const startButton = document.getElementById("start-btn");

// Start the quiz when the start button is clicked
startButton.addEventListener("click", () => {
    startContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    loadQuestion();
});

// Load the current question and display the question number
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionNumberElement.innerText = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("bg-gray-200", "hover:bg-gray-300", "text-black", "px-4", "py-2", "rounded", "m-1");
        button.onclick = () => selectOption(option);
        optionsElement.appendChild(button);
    });
}

// Handle option selection
function selectOption(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    nextButton.classList.remove("hidden");
}

// Handle next question button click
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        nextButton.classList.add("hidden");
    } else {
        showResult();
    }
});

// Show the final result
function showResult() {
    questionElement.classList.add("hidden");
    optionsElement.classList.add("hidden");
    nextButton.classList.add("hidden");
    resultElement.classList.remove("hidden");
    resultElement.innerText = `You scored ${score} out of ${quizData.length}`;
}

// Load the first question
loadQuestion();