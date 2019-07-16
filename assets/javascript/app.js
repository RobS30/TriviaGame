$(document).ready(function () {

    var timeRemaining = 5;

    var triviaQuestions = [{
        question: "During the first dundies episode, which employee recieved the 'Don't go in there after me' award?",
        choices: ["Michael", "Kevin", "Mr. Brown"],
        correctAnswer: "Kevin"
    },
    {
        question: "Complete this Michael Scott Quote: 'You know what they say in the Bible about forgiveness. ______________________'",
        choices: ["Forgive or we'll see you in hell", "Forgiveness is next to Godliness", "Just do it."],
        correctAnswer: "Forgiveness is next to Godliness"
    },
    {
        question: "After Dwight likens himself to Butch Cassidy, to whom does he compare Michael?",
        choices: ["Mozart", "Batman", "Robin"],
        correctAnswer: "Mozart"
    },
    {
        question: "What type of farm does Dwight own?",
        choices: ["Bear Farm", "Beet Farm", "Beetle Farm"],
        correctAnswer: "Beet Farm"
    },
    {
        question: "Where do Jim and Pam Share their first real kiss?",
        choices: ["Jim's Desk", "the warehouse", "the park"],
        correctAnswer: "Jim's Desk"
    },];

    // variable declarations
    numbercorrectAnswers = 0;
    numberIncorrectAnswers = 0;
    numberUnansweredQuestions = 0;

    //starts the game: 1) hides the start page 2) starts the timer 3) calls the function to show the questions
    var startGame = function () {
        $('#timer').html("Time: " + timeRemaining);
        setInterval(countDown, 1 * 1000);
        $('#startPage').hide();
        displayQuestions();
    }

    // pushes the trivia questions to the main div
    var displayQuestions = function () {
        for (var i = 0; i < triviaQuestions.length; i++) {

            $('#questionsDiv').append('<br><br><div id="question">' + triviaQuestions[i].question + '</div><br>');

            var answer1 = triviaQuestions[i].choices[0];
            var answer2 = triviaQuestions[i].choices[1];
            var answer3 = triviaQuestions[i].choices[2];

            $('#questionsDiv').append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer1 + '</label></div>');
            $('#questionsDiv').append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer2 + '</label></div>');
            $('#questionsDiv').append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer3 + '</label></div>');
        }
    }

    //counts the timer down and updates corresponding HTML; also prevents timer from going past 0
    var countDown = function () {
        timeRemaining--;
        $('#timer').html("Time: " + timeRemaining);
        if (timeRemaining === 0) {
            stopTimer();
        }
    }

    //hides timer and pushes player to next page
    var stopTimer = function () {
        $('#timer').hide();
        checkAnswers();
    }

    //hide the questions and display the end page with the results 
    var checkAnswers = function () {
        for (var i = 0; i < triviaQuestions.length; i++) {
            var correctResponse = triviaQuestions[i].correctAnswer;
            var usersResponse = $('input[id=radio' + i + ']:checked + label').text();
            if (usersResponse === correctResponse) {
                numbercorrectAnswers++;
            } else if (usersResponse === "") {
                numberUnansweredQuestions++;
            } else if (usersResponse !== correctResponse) {
                { numberIncorrectAnswers++; }
            }
        }
        showFinalResults();
    }

    // This will display the final results
    var showFinalResults = function () {
        $('#questionsDiv').empty();
        $('#correctAnswers').html("Correct Answers: " + numbercorrectAnswers)
        $('#incorrectAnswers').html("Incorrect Answer Answers: " + numberIncorrectAnswers)
        $('#unanswered').html("Unanswered: " + numberUnansweredQuestions);
    }

    // This is the event listener to start the initial game
    $('#startButton').click(function () {
        startGame();
    });

});