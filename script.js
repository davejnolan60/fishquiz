const js = `
// Quiz data
// Add this at the beginning of your script.js
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");
  
  // Test start button functionality
  const startBtn = document.getElementById('start-btn');
  if (startBtn) {
    console.log("Start button found");
    startBtn.addEventListener('click', function() {
      console.log("Start button clicked");
      document.getElementById('start-screen').classList.add('hidden');
      document.getElementById('quiz-screen').classList.remove('hidden');
    });
  } else {
    console.log("Start button not found!");
  }
});
const quizData = [
    {
        question: "Which fish species is shown in the image?",
        image: "yellowtail-kingfish.jpg", // Replace with actual image path
        options: [
            "Yellowtail Kingfish (Seriola lalandi)",
            "Australian Salmon (Arripis trutta)",
            "Tailor (Pomatomus saltatrix)",
            "Mulloway (Argyrosomus japonicus)"
        ],
        correctAnswer: 0,
        fishName: "Yellowtail Kingfish",
        keyFeatures: [
            "Long, streamlined body with prominent yellow/golden lateral line",
            "Yellow caudal fin",
            "Silver-grey body color",
            "Pointed head profile"
        ],
        regulations: [
            "Minimum legal length: 65cm",
            "Daily bag limit: 5 per person",
            "Found around rocky headlands, reefs, and offshore islands",
            "Often hunt in schools around structure and bait balls",
            "Look for them in current lines and deeper reef edges"
        ]
    },
    {
        question: "Which fish species is shown in the image?",
        image: "blue-groper.jpg", // Replace with actual image path
        options: [
            "Blue Groper (Achoerodus viridis)",
            "Black Drummer (Girella elevata)",
            "Luderick (Girella tricuspidata)",
            "Rock Blackfish (Girella cyanea)"
        ],
        correctAnswer: 0,
        fishName: "Blue Groper",
        keyFeatures: [
            "Large, thick lips",
            "Females are reddish-brown, males are vibrant blue",
            "Single continuous dorsal fin",
            "Large, paddle-like pectoral fins",
            "Robust body shape"
        ],
        regulations: [
            "PROTECTED SPECIES - Blue Groper is the NSW state fish and is protected from spearfishing",
            "Cannot be taken by spear or while using SCUBA equipment",
            "Important to identify to avoid illegal take",
            "Commonly found around rocky reefs and kelp beds"
        ]
    },
    {
        question: "Which fish species is shown in the image?",
        image: "snapper.jpg", // Replace with actual image path
        options: [
            "Snapper (Chrysophrys auratus)",
            "Pearl Perch (Glaucosoma scapulare)",
            "Silver Bream (Acanthopagrus australis)",
            "Tarwhine (Rhabdosargus sarba)"
        ],
        correctAnswer: 0,
        fishName: "Snapper",
        keyFeatures: [
            "Distinctive pinkish-red coloration",
            "Blue spots along upper body",
            "Prominent hump on forehead (more pronounced in older fish)",
            "Strong, curved teeth"
        ],
        regulations: [
            "Minimum legal length: 30cm",
            "Daily bag limit: 10 per person (only 1 fish over 70cm)",
            "Often found around reef edges and gravel bottoms",
            "More active during dawn and dusk",
            "Larger specimens typically found in deeper water (15-40m)"
        ]
    },
    {
        question: "Which fish species is shown in the image?",
        image: "eastern-rock-lobster.jpg", // Replace with actual image path
        options: [
            "Eastern Rock Lobster (Sagmariasus verreauxi)",
            "Southern Rock Lobster (Jasus edwardsii)",
            "Slipper Lobster (Ibacus spp.)",
            "Tropical Rock Lobster (Panulirus ornatus)"
        ],
        correctAnswer: 0,
        fishName: "Eastern Rock Lobster",
        keyFeatures: [
            "Long antennae",
            "Greenish-brown to red coloration",
            "No large front claws",
            "Spiny carapace",
            "Red/orange legs"
        ],
        regulations: [
            "Minimum legal length: 10.4cm carapace length",
            "Daily bag limit: 2 per person",
            "Seasonal closures apply (typically closed June-October)",
            "Found in caves and under ledges in rocky reef areas",
            "Measure carapace from the rear of the eye socket to the rear of the carapace",
            "Cannot be taken using SCUBA equipment"
        ]
    },
    {
        question: "Which fish species is shown in the image?",
        image: "dusky-flathead.jpg", // Replace with actual image path
        options: [
            "Dusky Flathead (Platycephalus fuscus)",
            "Sand Whiting (Sillago ciliata)",
            "Flounder (Pseudorhombus spp.)",
            "Sole (Cynoglossidae family)"
        ],
        correctAnswer: 0,
        fishName: "Dusky Flathead",
        keyFeatures: [
            "Flat, elongated body with triangular head",
            "Eyes on top of head",
            "Mottled brown/grey coloration for camouflage",
            "Small spines near the head",
            "Large mouth with sharp teeth"
        ],
        regulations: [
            "Minimum legal length: 36cm",
            "Maximum legal length: 70cm (must release fish over this size)",
            "Daily bag limit: 10 per person (only 1 fish over 70cm)",
            "Found in estuaries, coastal lakes, and shallow bays",
            "Often partially buried in sand or mud",
            "Approach cautiously from the side as they're easily spooked"
        ]
    },
    {
        question: "Which fish species is shown in the image?",
        image: "mulloway.jpg", // Replace with actual image path
        options: [
            "Mulloway (Argyrosomus japonicus)",
            "Tailor (Pomatomus saltatrix)",
            "Australian Salmon (Arripis trutta)",
            "Trevally (Caranx spp.)"
        ],
        correctAnswer: 0,
        fishName: "Mulloway (Jewfish)",
        keyFeatures: [
            "Silver-grey coloration",
            "Copper/bronze tint, especially on larger specimens",
            "Slightly elongated body shape",
            "Distinctive lateral line",
            "Small mouth relative to body size"
        ],
        regulations: [
            "Minimum legal length: 70cm",
            "Daily bag limit: 2 per person",
            "Found in estuaries, surf zones, and rocky headlands",
            "Often more active at night, especially around tide changes",
            "Larger specimens frequently found near river mouths after heavy rain"
        ]
    },
    {
        question: "Which fish species is shown in the image?",
        image: "eastern-red-morwong.jpg", // Replace with actual image path
        options: [
            "Eastern Red Morwong (Cheilodactylus fuscus)",
            "Silver Sweep (Scorpis lineolata)",
            "Luderick (Girella tricuspidata)",
            "Mado (Atypichthys strigatus)"
        ],
        correctAnswer: 0,
        fishName: "Eastern Red Morwong",
        keyFeatures: [
            "Reddish-brown coloration",
            "White stripes along body",
            "Long, flowing pectoral fins with extended rays",
            "Blunt head profile",
            "Relatively deep body"
        ],
        regulations: [
            "Minimum legal length: 30cm",
            "Daily bag limit: 5 per person",
            "Found around rocky reefs and kelp beds",
            "Often found in caves and under ledges",
            "Relatively easy target for beginners due to their slow movement"
        ]
    },
    {
        question: "Which fish species is shown in the image?",
        image: "mahi-mahi.jpg", // Replace with actual image path
        options: [
            "Mahi Mahi (Coryphaena hippurus)",
            "Mackerel Tuna (Euthynnus affinis)",
            "Bonito (Sarda australis)",
            "Frigate Mackerel (Auxis thazard)"
        ],
        correctAnswer: 0,
        fishName: "Mahi Mahi (Dolphinfish)",
        keyFeatures: [
            "Vibrant coloration - gold, blue, and green",
            "Distinctive squared-off head (males have more prominent forehead)",
            "Long dorsal fin running the length of the body",
            "Deeply forked tail",
            "Males have more pronounced head bump"
        ],
        regulations: [
            "Minimum legal length: 60cm",
            "Daily bag limit: 10 per person",
            "Seasonal availability, more common in summer months",
            "Often found around floating debris and FADs (Fish Aggregating Devices)",
            "Fast swimmers requiring accurate shooting"
        ]
    },
    {
        question: "Which fish species is shown in the image?",
        image: "silver-trevally.jpg", // Replace with actual image path
        options: [
            "Silver Trevally (Pseudocaranx dentex)",
            "Giant Trevally (Caranx ignobilis)",
            "Samsonfish (Seriola hippos)",
            "Amberjack (Seriola dumerili)"
        ],
        correctAnswer: 0,
        fishName: "Silver Trevally",
        keyFeatures: [
            "Silver-grey coloration",
            "Yellow fins and tail",
            "Deeply forked tail",
            "Small scales",
            "Curved lateral line at the front",
            "Smaller and more slender than GT"
        ],
        regulations: [
            "Minimum legal length: 30cm",
            "Daily bag limit: 20 per person",
            "Found around rocky reefs, jetties, and breakwalls",
            "Often hunt in schools",
            "More common in cooler months in NSW"
        ]
    },
    {
        question: "Which fish species is shown in the image?",
        image: "rock-blackfish.jpg", // Replace with actual image path
        options: [
            "Eastern Blue Groper (Achoerodus viridis)",
            "Crimson-banded Wrasse (Notolabrus gymnogenis)",
            "Maori Wrasse (Cheilinus undulatus)",
            "Rock Blackfish (Girella cyanea)"
        ],
        correctAnswer: 3,
        fishName: "Rock Blackfish (Black Drummer)",
        keyFeatures: [
            "Dark grey to black coloration",
            "Deep, oval-shaped body",
            "Small mouth with chisel-like teeth",
            "Distinctive lateral line",
            "Single continuous dorsal fin"
        ],
        regulations: [
            "Minimum legal length: 30cm",
            "Daily bag limit: 10 per person",
            "Found in wash zones around rocky headlands and reefs",
            "Often in surge zones feeding on algae",
            "Strong swimmers requiring well-placed shots",
            "Good eating despite their herbivorous diet"
        ]
    }
];

// Quiz state variables
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    
    const startBtn = document.getElementById('start-btn');
    const questionText = document.getElementById('question-text');
    const fishImage = document.getElementById('fish-image');
    const optionsContainer = document.getElementById('options-container');
    const progressBar = document.getElementById('progress-bar');
    const currentQuestionSpan = document.getElementById('current-question');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const currentScoreSpan = document.getElementById('current-score');
    
    const feedbackContainer = document.getElementById('feedback-container');
    const resultMessage = document.getElementById('result-message');
    const fishName = document.getElementById('fish-name');
    const keyFeatures = document.getElementById('key-features');
    const regulations = document.getElementById('regulations');
    const nextBtn = document.getElementById('next-btn');
    
    const finalScore = document.getElementById('final-score');
    const maxScore = document.getElementById('max-score');
    const scoreMessage = document.getElementById('score-message');
    const resultsList = document.getElementById('results-list');
    const retryBtn = document.getElementById('retry-btn');
    const shareBtn = document.getElementById('share-btn');

    // Initialize quiz
    function initializeQuiz() {
        totalQuestionsSpan.textContent = quizData.length;
        maxScore.textContent = quizData.length;
        
        // Shuffle quiz questions for variety
        shuffleArray(quizData);
        
        startBtn.addEventListener('click', startQuiz);
        nextBtn.addEventListener('click', nextQuestion);
        retryBtn.addEventListener('click', resetQuiz);
        shareBtn.addEventListener('click', shareResults);
    }

    // Start the quiz
    function startQuiz() {
        startScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        
        // Reset quiz state
        currentQuestion = 0;
        score = 0;
        userAnswers = [];
        
        // Load first question
        loadQuestion();
    }

    // Load a question
    function loadQuestion() {
        // Update progress indicators
        currentQuestionSpan.textContent = currentQuestion + 1;
        progressBar.style.width = \`\${((currentQuestion + 1) / quizData.length) * 100}%\`;
        currentScoreSpan.textContent = score;
        
        // Hide feedback container if visible
        feedbackContainer.classList.add('hidden');
        
        // Get current question data
        const questionData = quizData[currentQuestion];
        
        // Set question text and image
        questionText.textContent = questionData.question;
        // For demo purposes - use placeholder. In production, use actual image path:
        fishImage.src = questionData.image || 'https://via.placeholder.com/400x250?text=Fish+Image';
        
        // Clear previous options
        optionsContainer.innerHTML = '';
        
        // Add options
        questionData.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.dataset.index = index;
            
            optionElement.addEventListener('click', () => selectOption(optionElement, index));
            
            optionsContainer.appendChild(optionElement);
        });
    }

    // Handle option selection
    function selectOption(optionElement, selectedIndex) {
        // Prevent selecting multiple options
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.classList.remove('selected');
            option.removeEventListener('click', selectOption);
        });
        
        // Mark selected option
        optionElement.classList.add('selected');
        
        // Get current question data
        const questionData = quizData[currentQuestion];
        const correctIndex = questionData.correctAnswer;
        
        // Check if answer is correct
        const isCorrect = selectedIndex === correctIndex;
        
        // Update score if correct
        if (isCorrect) {
            score++;
            currentScoreSpan.textContent = score;
            optionElement.classList.add('correct');
        } else {
            optionElement.classList.add('incorrect');
            // Highlight correct answer
            options[correctIndex].classList.add('correct');
        }
        
        // Store user's answer
        userAnswers.push({
            question: questionData.question,
            userAnswer: selectedIndex,
            correctAnswer: correctIndex,
            isCorrect: isCorrect
        });
        
        // Show feedback
        showFeedback(isCorrect, questionData);
    }

    // Show feedback after answering
    function showFeedback(isCorrect, questionData) {
        feedbackContainer.classList.remove('hidden');
        
        // Set result message
        resultMessage.textContent = isCorrect ? 'Correct! Well done!' : 'Incorrect. Let\'s learn about this fish:';
        resultMessage.className = isCorrect ? 'correct' : 'incorrect';
        
        // Set fish information
        fishName.textContent = questionData.fishName;
        
        // Clear previous lists
        keyFeatures.innerHTML = '';
        regulations.innerHTML = '';
        
        // Add key features
        questionData.keyFeatures.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            keyFeatures.appendChild(li);
        });
        
        // Add regulations
        questionData.regulations.forEach(regulation => {
            const li = document.createElement('li');
            li.textContent = regulation;
            regulations.appendChild(li);
        });
    }

    // Move to next question
    function nextQuestion() {
        currentQuestion++;
        
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    // Show quiz results
    function showResults() {
        quizScreen.classList.add('hidden');
        resultsScreen.classList.remove('hidden');
        
        // Update final score
        finalScore.textContent = score;
        
        // Show appropriate message based on score
        const percentage = (score / quizData.length) * 100;
        let message = '';
        
        if (percentage >= 90) {
            message = 'Excellent! You\'re a NSW fish identification expert!';
        } else if (percentage >= 75) {
            message = 'Great job! You\'re well on your way to becoming a skilled spearfisher!';
        } else if (percentage >= 50) {
            message = 'Good effort! With a bit more practice, you\'ll be identifying fish like a pro!';
        } else {
            message = 'Keep practicing! Fish identification is a skill that develops over time.';
        }
        
        scoreMessage.textContent = message;
        
        // Clear previous results
        resultsList.innerHTML = '';
        
        // Add result items
        userAnswers.forEach((result, index) => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            
            const indicator = document.createElement('div');
            indicator.classList.add('result-indicator');
            indicator.classList.add(result.isCorrect ? 'correct' : 'incorrect');
            
            const text = document.createElement('div');
            text.classList.add('result-text');
            
            // Get fish name from question data
            const fishName = quizData.find(q => q.question === result.question).fishName;
            
            text.textContent = \`Question \${index + 1}: \${fishName}\`;
            
            resultItem.appendChild(indicator);
            resultItem.appendChild(text);
            resultsList.appendChild(resultItem);
        });
    }

    // Reset the quiz
    function resetQuiz() {
        resultsScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        
        // Reset quiz state
        currentQuestion = 0;
        score = 0;
        userAnswers = [];
        
        // Reshuffle questions
        shuffleArray(quizData);
    }

    // Share results function
    function shareResults() {
        const text = \`I scored \${score} out of \${quizData.length} on the NSW Spearfishing Fish ID Quiz!\`;
        
        // Check if Web Share API is supported
        if (navigator.share) {
            navigator.share({
                title: 'NSW Spearfishing Quiz Results',
                text: text
            }).catch(error => {
                console.log('Error sharing:', error);
                alert(text + '\\n\\nCopy this text to share your results!');
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            alert(text + '\\n\\nCopy this text to share your results!');
        }
    }

    // Utility function to shuffle array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Initialize the quiz
    initializeQuiz();
});
`;
