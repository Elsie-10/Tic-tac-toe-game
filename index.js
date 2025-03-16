// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll('.square'); // Get all the squares
    let currentPlayer = 'X'; // Set the initial player to 'X'
    let gameOver = false; // Flag to check if the game is over

    // Function to handle click on squares
    squares.forEach((square) => {
        square.addEventListener('click', function () {
            // If the square is already filled or the game is over, do nothing
            if (square.innerText !== "" || gameOver) {
                return;
            }

            // Fill the square with the current player's symbol (X or O)
            square.innerText = currentPlayer;
            square.style.color = currentPlayer === 'X' ? 'black' : 'green'; // X is black, O is green

            // Check if the current player wins
            if (checkWinner(currentPlayer)) {
                showWinner(currentPlayer);
            } else if (checkTie()) {
                showTie();
            } else {
                // Switch the turn to the other player
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });

    // Function to check if a player has won
    function checkWinner(player) {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return squares[a].innerText === player && squares[b].innerText === player && squares[c].innerText === player;
        });
    }

    // Function to check if the game is a tie
    function checkTie() {
        return [...squares].every(square => square.innerText !== "");
    }

    // Function to show the winner
    function showWinner(winner) {
        gameOver = true;
        alert(`${winner} wins!`);
    }

    // Function to show a tie message
    function showTie() {
        gameOver = true;
        alert("It's a tie!");
    }
});
