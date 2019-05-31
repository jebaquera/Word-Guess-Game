// HTML selectors
var secretWord = document.getElementById('secret-word');
var lettersGuessed = document.getElementById('letters-guessed');
var guessesRemaining = document.getElementById('guesses-remaining');
var numberWins = document.getElementById('number-wins');
var numberLosses = document.getElementById('number-losses');

// Variables
var wins = 0;
var losses = 0;

// 
numberWins.append(wins);

// Word Game revolves around Texas theme
// 1. Create an array of words for guessing game.
var texasWords = ["barbecue", "longhorns", "pecans", "whataburger", "cowboys", "armstrong", "mockingbird", "terlingua", "spindletop", "willie", "armadillo", "bluebonnets", "alamo", "capital"];

// Computer will make random pick from array list
// 2. Use Math.random and Math.floor to pick a random word from the array to use for the 'guess' word.
var word = texasWords[Math.floor(Math.random() * texasWords.length)];

// Create an empty array to use for underscores (_)
// 3. Create an empty array called answerArray and fill with underscores (_) that will match the number of letters in our Texas Word.
var answerArray = [];
// For loop creates a looping variable i that starts at 0 and goes up to word.length 
// When finished answerArray will be same length as word. Letters equals number of underscores to present to user.
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

// Create a variable remainingLetters and set it to the length of the secret guess word
// 4. Create a variable to keep track of how many letters the user has left to be guessed.
var remainingLetters = word.length;

// Every time the player guesses a correct letter, the remainingLetters value will be decreased by 1 for each instance of that letter in the word

// ------------

// The Game Loop
while (remainingLetters > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));

    // Take guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        //Exit the game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Update answerArray and remainingLetters for every correct guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
// End of Game loop

// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("You're a True Texan! The answer was " + word);

// Need to add an alert if user has not provided the correct answer within the allotted guesses.







// ---------------------

// Pre-pseudocode exercise
// 1. Pick a random word.
// 2. Take the player’s guess.
// 3. Quit the game if the player wants to.
// 4. Check that the player’s guess is a valid letter.
// 5. Keep track of letters the player has guessed.
// 6. Show the player their progress.
// 7. Finish when the player has guessed the word.
// 8. Or Finish when the player is out of guesses and count as a Loss.
