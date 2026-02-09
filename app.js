console.log("Hello World");

function playGame() {
    // Score variables
    let humanScore = 0;
    let computerScore = 0;

    // Function to get computer's choice
    function getComputerChoice() {
        const randomNumber = Math.random();
        
        if (randomNumber < 1/3) {
            return "rock";
        } else if (randomNumber < 2/3) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    // Function to get human's choice
    function getHumanChoice() {
        const userInput = prompt("Enter your choice: rock, paper, or scissors");
        return userInput.toLowerCase();
    }

    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
        // Make humanChoice case-insensitive
        humanChoice = humanChoice.toLowerCase();
        
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        
        // Determine winner
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
            computerScore++;
        }
        
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
        console.log("---");
    }

    // Play 5 rounds
    console.log("Let's play Rock Paper Scissors! Best of 5 rounds.\n");
    
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Declare final winner
    console.log("=== GAME OVER ===");
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("🎉 Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("😔 Sorry! The computer won the game.");
    } else {
        console.log("🤝 It's a tie game!");
    }
}

// Start the game
playGame();
