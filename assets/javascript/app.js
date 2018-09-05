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
    q1: 1,
    ask: "What type of bat lives in Austin?",
    choices1: "Mexican free-tailed bat",
    choices2: "Batman",
    choices3: "Vampire bat",
    choices4: "Megabats",
    correctAns: "Mexican free-tailed bat"
},
{
    q2: 2,
    ask: "What does a Mexican free-tailed bat eat?",
    choices1: "Blood",
    choices2: "Insects",
    choices3: "Torchys",
    choices4: "Fruit",
    correctAns: "Insects",
},
{
    q3: 3,
    ask: "When do the bats call congress home?",
    choices1: "During UT Football season", 
    choices2: "From March to November",
    choices3: "December to Janruary",
    choices4: "All year round",
    correctAns: "from March to November",
}

]

//The game starts here //
function startGame() {
    $(".guess-pack").removeClass('hide');
    $(".display-4").hide();
    $(".lead").hide();
    $(".my-4").hide();
    $(".buttonInfo").hide();
    $("#start-game").hide();
    displayAsk();
};
//The timer starts counting down, asks the question, and shows the choices to pick from
function displayAsk() {
    $(".ask-question").html('<h3>Question ' + parseInt(counter) + '/' + parseInt(questions.length) + '</h3>');
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
    $(".guess-pack").addClass('hide');
    $(".outcome").removeClass('hide');
    $(".asked-question").addClass('hide');
    clearInterval(myTimeCounter);
    clearInterval(timeOut);
    unanswered++;
    $(".outcome").html("<h1>You're out of time!</h1>");
    setTimeout(nextQuestion, 3000);
};

function nextQuestion() {
    $(".guess-pack").removeClass('hide');
    $(".outcome").hide();
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

function guessChoices(numero) {
    if(numero === questions[counter].correctAns){
        clearInterval(myTimeCounter);
        clearInterval(timeOut);
        correct++;
        setTimeout(nextQuestion, 9000);
    }   
    else{
        clearInterval(myTimeCounter);
        clearInterval(timeOut);
        incorrect++;
        setTimeout(nextQuestion, 9000);
    }
};
//});