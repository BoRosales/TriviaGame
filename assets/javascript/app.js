//Global variables
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let myTimer = 15;
let myTimeCounter;
let timeOut;
let counter = 0;
let questions = [
    {
    ask: "What type of bat lives in Austin?",
    choices1: "Mexican free-tailed bat",
    choices2: "Batman",
    choices3: "Vampire bat",
    choices4: "Megabats",
    correctAns: "Mexican free-tailed bat",
    number: 1,
},
{
    ask: "What does a Mexican free-tailed bat eat?",
    choices1: "Blood",
    choices2: "Insects",
    choices3: "Torchys",
    choices4: "Fruit",
    correctAns: "Insects",
    number: 2,
},
{
    ask: "When do the bats call congress home?",
    choices1: "During UT Football season", 
    choices2: "From March to November",
    choices3: "December to Janruary",
    choices4: "All year round",
    correctAns: "from March to November",
    number: 2,
},
{
    ask: "What is the average life span of the Mexican free-tailed bat?",
    choices1: "Eternally",
    choices2: "Up to 5 years",
    choices3: "Up to 12 years",
    choices4: "up to 18 years",
    correctAns: "Up to 12 years",
    number: 3,
}

]

//The game starts here //
function startGame() {
    $(".guess-pack").removeClass('hidden');
    $(".display-4").hide();
    $(".lead").hide();
    $(".my-4").hide();
    $(".buttonInfo").hide();
    $("#start-game").hide();
    displayAsk();
};
//The timer starts counting down, asks the question, and shows the choices to pick from
function displayAsk() {
    $(".ask-question").html('<h3>Question ' + parseInt(counter + 1) + '/' + parseInt(questions.length) + '</h3>');
    $(".timer").html('<h2>Timer: ' + myTimer + 's</h2>')
    myTimeCounter = setInterval(timer, 1000);
    $(".asked-question").html('<h3>' + questions[counter].ask + '</h3>');
    displayChoices();
    timeOut = setTimeout(timeDone, 1000 * 15);
};

function timer() {
    myTimer--;
    $(".timer").html('<h3>Timer: ' + myTimer + 's</h3>');
};

function displayChoices() {
    $("#choices1").html(questions[counter].choices1);
    $("#choices2").html(questions[counter].choices2);
    $("#choices3").html(questions[counter].choices3);
    $("#choices4").html(questions[counter].choices4);
};

function timeDone() {
    $(".outcome").removeClass('hidden');
    clearInterval(myTimeCounter);
    clearInterval(timeOut);
    unanswered++;
    $(".outcome").html("<h1>You're out of time!</h1>");
    setTimeout(nextQuestion, 3000);
};

function nextQuestion() {
    $(".outcome").addClass('hidden');
    clearInterval(myTimeCounter);
    clearInterval(timeOut);
    myTimer = 15
    counter++;
    if(questions.length === counter){
        gameOver();
    } 
    else {
        displayAsk(); 
    }

};

function guessChoices(num) {
    if(num === questions[counter].number){
        clearInterval(myTimeCounter);
        clearInterval(timeOut);
        correct++;
        $(".outcome").removeClass('hidden');
        $(".outcome").html("<h4>You're right!</h4>");
        setTimeout(nextQuestion, 2000);
    }   
    else{
        clearInterval(myTimeCounter);
        clearInterval(timeOut);
        incorrect++;
        $(".outcome").removeClass('hidden');
        $(".outcome").html("<h4>Wrong choice!</h4>")
        setTimeout(nextQuestion, 2000);
    }
};

function gameOver() {
    $(".correct").removeClass('hidden');
    $(".incorrect").removeClass('hidden');
    $(".unanswered").removeClass('hidden');
    $(".timer").hide();
    clearInterval(myTimeCounter);
    clearInterval(timeOut);
    if( correct === 1 ) {
        $(".correct").html('<p>' + correct + ' question correct</p>');
    }
    else{
        $(".correct").html('<p>' + correct + ' questions correct</p>');
    }
    if( incorrect === 1 ) {
        $(".incorrect").html('<p>' + correct + ' question incorrect</p>');
    }
    else{
        $(".incorrect").html('<p>' + correct + ' questions incorrect</p>');
    }
    if( unanswered === 1 ) {
        $(".unanswered").html('<p>' + correct + ' question unanswered</p>');
    }
    else{
        $(".unanswered").html('<p>' + correct + ' questions unanswered</p>');
    }
    $("#reset-game").removeClass('hidden');

};

function reset() {
    $(".timer").show();
    $(".correct").addClass('hidden');
    $(".incorrect").addClass('hidden');
    $(".unanswered").addClass('hidden');
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    time = 15;
    counter = 0;
    displayAsk();
};
