const game = () => {
    let playerScore = 0,
        skynetScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button'),
            intro = document.querySelector('.intro'),
            match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            intro.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    }

    function playMatch() {
        const skynetHand = document.querySelector('.skynet-hand img'),
            skynetArray = ['rock', 'scissors', 'paper'],
            playerOptions = document.querySelectorAll('.options button'),
            playerHand = document.querySelector('.player-hand img'),
            hands = document.querySelectorAll('.hands img');

            hands.forEach(hand => {
                hand.addEventListener('animationend', function() {
                    this.style.animation = '';
                })
            });

        playerOptions.forEach(option => {
            option.addEventListener('click', function () {
                const skynetOption = Math.floor(Math.random() * 3),
                    skynetChoice = skynetArray[skynetOption];

                setTimeout(() => {
                    skynetHand.src = `img/${skynetChoice}.png`;
                    playerHand.src = `img/${this.textContent}.png`;
                    compareHand(this.textContent, skynetChoice);
                }, 2000);

                playerHand.style.animation = 'shapePlayerHand 2s ease-in';
                skynetHand.style.animation = 'shapeSkynetHand 2s ease-in';
            });
        });
    }

    const updateScore = () => {
        const pScore = document.querySelector('.player-score p'),
            sScore = document.querySelector('.skynet-score p');
        pScore.textContent = playerScore;
        sScore.textContent = skynetScore;
    }

    function compareHand(playerChoice, skynetChoice) {
        const winner = document.querySelector('.winner');

        if (playerChoice === skynetChoice) {
            winner.textContent = 'It is a tie!';
            return;
        }

        if (playerChoice === 'rock') {
            if (skynetChoice === 'scissors') {
                winner.textContent = 'Player wins!';
                playerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Skynet wins!';
                skynetScore++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'scissors') {
            if (skynetChoice === 'paper') {
                winner.textContent = 'Player wins!';
                playerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Skynet wins!';
                skynetScore++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'paper') {
            if (skynetChoice === 'rock') {
                winner.textContent = 'Player wins!';
                playerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Skynet wins!';
                skynetScore++;
                updateScore();
                return;
            }
        }
    }

    startGame();
    playMatch();
}

game();