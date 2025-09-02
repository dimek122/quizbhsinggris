// Bank soal yang diperbanyak (minimal 50 soal lebih)
const allQuizData = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { question: "What is the past tense of 'go'?", options: ["goed", "went", "gone", "going"], answer: "went" },
    { question: "Which of these is a synonym for 'happy'?", options: ["sad", "joyful", "angry", "tired"], answer: "joyful" },
    { question: "Complete the sentence: 'She is ___ a book.'", options: ["read", "reads", "reading", "readed"], answer: "reading" },
    { question: "What is the plural form of 'child'?", options: ["childs", "children", "childes", "child's"], answer: "children" },
    { question: "Which word means 'a large building or group of buildings'?", options: ["hut", "palace", "tent", "shed"], answer: "palace" },
    { question: "Choose the correct sentence: 'I have ___ money.'", options: ["many", "much", "a lot", "little"], answer: "much" },
    { question: "What is the opposite of 'light'?", options: ["heavy", "dark", "fast", "loud"], answer: "dark" },
    { question: "What is the past tense of 'see'?", options: ["saw", "seen", "seed", "sees"], answer: "saw" },
    { question: "I am a fruit that is yellow and curved. What am I?", options: ["Apple", "Orange", "Banana", "Grape"], answer: "Banana" },
    { question: "Which of these is a bird?", options: ["Dog", "Cat", "Sparrow", "Fish"], answer: "Sparrow" },
    { question: "A person who teaches is a...", options: ["Student", "Doctor", "Teacher", "Engineer"], answer: "Teacher" },
    { question: "What is the color of a ripe tomato?", options: ["Green", "Blue", "Red", "Yellow"], answer: "Red" },
    { question: "How many days are in a week?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "Which one is a sea animal?", options: ["Lion", "Monkey", "Whale", "Bear"], answer: "Whale" },
    { question: "What is the sound of a cat?", options: ["Bark", "Meow", "Roar", "Moo"], answer: "Meow" },
    { question: "I can fly but have no wings. What am I?", options: ["Car", "Rocket", "Bike", "Train"], answer: "Rocket" },
    { question: "What is the correct spelling?", options: ["Beleive", "Believe", "Belive", "Believ"], answer: "Believe" },
    { question: "The opposite of 'cold' is...", options: ["Hot", "Warm", "Freeze", "Chilly"], answer: "Hot" },
    { question: "What do you use to write on a paper?", options: ["Spoon", "Fork", "Pencil", "Knife"], answer: "Pencil" },
    { question: "Which of these is a vegetable?", options: ["Strawberry", "Carrot", "Cherry", "Apple"], answer: "Carrot" },
    { question: "What is the largest country in the world by area?", options: ["Canada", "China", "Russia", "USA"], answer: "Russia" },
    { question: "The sun is a...", options: ["Planet", "Moon", "Star", "Comet"], answer: "Star" },
    { question: "How many months are in a year?", options: ["10", "12", "14", "24"], answer: "12" },
    { question: "A baker bakes...", options: ["Bread", "Shoes", "Clothes", "Cars"], answer: "Bread" },
    { question: "What is the opposite of 'up'?", options: ["Right", "Left", "Down", "Forward"], answer: "Down" },
    { question: "Which animal says 'oink'?", options: ["Dog", "Cat", "Pig", "Cow"], answer: "Pig" },
    { question: "What is the full form of 'USA'?", options: ["United States of America", "Union of South Africa", "United States Army", "Universal Search Agency"], answer: "United States of America" },
    { question: "I am a place where you can borrow books. What am I?", options: ["Cafe", "Library", "Cinema", "Museum"], answer: "Library" },
    { question: "What is the main color of the ocean?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Blue" },
    { question: "How do you spell 'beautiful'?", options: ["beautifull", "beautful", "beautiful", "beutiful"], answer: "beautiful" },
    { question: "Which finger is the longest?", options: ["Thumb", "Index", "Middle", "Pinky"], answer: "Middle" },
    { question: "What is the main language of Brazil?", options: ["Spanish", "English", "Portuguese", "French"], answer: "Portuguese" },
    { question: "What is the opposite of 'inside'?", options: ["Below", "Outside", "Above", "Before"], answer: "Outside" },
    { question: "A baby cat is called a...", options: ["Puppy", "Kitten", "Calf", "Cub"], answer: "Kitten" },
    { question: "How many legs does a spider have?", options: ["6", "8", "4", "10"], answer: "8" },
    { question: "What is the main ingredient of bread?", options: ["Water", "Flour", "Sugar", "Salt"], answer: "Flour" },
    { question: "Which month comes after October?", options: ["September", "November", "December", "January"], answer: "November" },
    { question: "What do you use to see in the dark?", options: ["Lantern", "Goggles", "Umbrella", "Bag"], answer: "Lantern" },
    { question: "The opposite of 'fast' is...", options: ["Quick", "Slow", "Rapid", "Hurry"], answer: "Slow" },
    { question: "Which is a type of transport?", options: ["Spoon", "Chair", "Car", "Book"], answer: "Car" },
    { question: "What is the color of an emerald?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Green" },
    { question: "Which continent is home to the Amazon rainforest?", options: ["Asia", "Africa", "South America", "Europe"], answer: "South America" },
    { question: "A doctor works in a...", options: ["School", "Hospital", "Restaurant", "Market"], answer: "Hospital" },
    { question: "The past tense of 'eat' is...", options: ["eaten", "eats", "ate", "eating"], answer: "ate" },
    { question: "Which planet is known as the 'Red Planet'?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
    { question: "What is the official language of the United Kingdom?", options: ["French", "German", "English", "Spanish"], answer: "English" },
    { question: "Which animal is known as the 'King of the Jungle'?", options: ["Tiger", "Lion", "Elephant", "Monkey"], answer: "Lion" },
    { question: "What do you use to clean your teeth?", options: ["Comb", "Soap", "Toothbrush", "Spoon"], answer: "Toothbrush" },
    { question: "How many seasons are there in a year?", options: ["2", "3", "4", "5"], answer: "4" },
    { question: "The opposite of 'empty' is...", options: ["Full", "Hollow", "Dry", "Open"], answer: "Full" },
    { question: "What is the young of a cow called?", options: ["Puppy", "Kitten", "Calf", "Cub"], answer: "Calf" },
    { question: "Which of these is a source of light?", options: ["Rock", "Water", "Sun", "Sand"], answer: "Sun" },
    { question: "What is the main color of a school bus?", options: ["Red", "Green", "Yellow", "Blue"], answer: "Yellow" },
    { question: "The past tense of 'run' is...", options: ["ran", "runned", "running", "runs"], answer: "ran" },
    { question: "What is the main function of the lungs?", options: ["Pumping blood", "Digesting food", "Breathing", "Seeing"], answer: "Breathing" },
    { question: "How many sides does a triangle have?", options: ["2", "3", "4", "5"], answer: "3" },
    { question: "The opposite of 'short' is...", options: ["Big", "Small", "Tall", "Long"], answer: "Tall" },
    { question: "Which bird is a symbol of peace?", options: ["Eagle", "Pigeon", "Raven", "Owl"], answer: "Pigeon" },
    { question: "What do you use to cut paper?", options: ["Pencil", "Scissors", "Ruler", "Glue"], answer: "Scissors" }
];

// Variabel kuis
let quizData = [];
let userName = '';
let currentQuestionIndex = 0;
let score = 0;
let answers = [];
let timer;
const totalTime = 60 * 60;
let timeRemaining = totalTime;

// Elemen DOM
const welcomePage = document.querySelector('.welcome-page');
const quizPage = document.querySelector('.quiz-page');
const resultPage = document.querySelector('.result-page');
const nameInput = document.getElementById('nameInput');
const startButton = document.getElementById('startButton');
const startQuizButton = document.getElementById('startQuizButton');
const audioSelectionDiv = document.querySelector('.audio-selection');
const quizContentDiv = document.getElementById('quizContent');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('options');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const finishButton = document.getElementById('finishButton');
const backgroundAudio = document.getElementById('backgroundAudio');
const timerDisplay = document.getElementById('timer');
const questionNumberDisplay = document.getElementById('questionNumber');
const resultName = document.getElementById('resultName');
const resultScore = document.getElementById('resultScore');
const shareWhatsappButton = document.getElementById('shareWhatsappButton');

// Fungsi untuk mengacak array (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fungsi untuk memilih 50 soal acak dari bank soal
function selectRandomQuestions(sourceArray, count) {
    const shuffled = shuffleArray([...sourceArray]);
    return shuffled.slice(0, count);
}

// Event listener saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    quizData = selectRandomQuestions(allQuizData, 50);
    answers = new Array(quizData.length).fill(null);
});

// Aksi tombol "Mulai Kuis"
startButton.addEventListener('click', () => {
    userName = nameInput.value.trim();
    if (userName) {
        welcomePage.style.display = 'none';
        quizPage.style.display = 'flex';
        audioSelectionDiv.style.display = 'block';
    } else {
        alert('Tolong masukkan namamu!');
    }
});

// Aksi tombol "Mulai Kuis!" setelah pilih lagu
startQuizButton.addEventListener('click', () => {
    const selectedAudio = document.querySelector('input[name="audio"]:checked').value;
    backgroundAudio.src = selectedAudio;
    backgroundAudio.play();

    audioSelectionDiv.style.display = 'none';
    quizContentDiv.style.display = 'block';
    
    startTimer();
    loadQuestion();
});

// Fungsi untuk memuat soal
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionNumberDisplay.textContent = `Soal ke-${currentQuestionIndex + 1}`;
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => selectAnswer(optionDiv, option));
        optionsContainer.appendChild(optionDiv);

        if (answers[currentQuestionIndex] === option) {
            optionDiv.classList.add('selected');
        }
    });

    prevButton.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    nextButton.style.display = currentQuestionIndex < quizData.length - 1 ? 'inline-block' : 'none';
    finishButton.style.display = currentQuestionIndex === quizData.length - 1 ? 'inline-block' : 'none';
}

// Fungsi untuk memilih jawaban
function selectAnswer(optionDiv, selectedOption) {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    optionDiv.classList.add('selected');
    answers[currentQuestionIndex] = selectedOption;
}

// Navigasi soal
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
});

prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

// Tombol Selesai
finishButton.addEventListener('click', showResult);

// Fungsi untuk memulai timer
function startTimer() {
    timer = setInterval(() => {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `Waktu: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            showResult();
        }
    }, 1000);
}

// Fungsi untuk menampilkan hasil
function showResult() {
    clearInterval(timer);
    backgroundAudio.pause();
    backgroundAudio.currentTime = 0;

    score = 0;
    for (let i = 0; i < quizData.length; i++) {
        if (answers[i] === quizData[i].answer) {
            score += 10;
        }
    }

    quizPage.style.display = 'none';
    resultPage.style.display = 'flex';
    resultName.textContent = userName;
    resultScore.textContent = `${score} / ${quizData.length * 10}`;

    // Perubahan di sini: Panggilan fungsi WhatsApp
    shareWhatsappButton.addEventListener('click', sendToWhatsApp);
}

// Fungsi untuk mengirim hasil ke WhatsApp
function sendToWhatsApp() {
    // Arahkan langsung ke URL yang diberikan
    const whatsappUrl = 'https://api.whatsapp.com/send?phone=6283848832382';
    window.open(whatsappUrl, '_blank');
}