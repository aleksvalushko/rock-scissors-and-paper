const game = () => {
    let playerScore = 0,
        skynetScore = 0,
        skynetHand = document.querySelector('.skynet-hand img'),
        playerHand = document.querySelector('.player-hand img');

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
        const skynetArray = ['rock', 'scissors', 'paper'],
            playerOptions = document.querySelectorAll('.options button'),
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

    const updateHands = () => {
        skynetHand.src = 'img/rock.png';
        playerHand.src = 'img/rock.png';
    }

    function compareHand(playerChoice, skynetChoice) {
        const winner = document.querySelector('.winner');

        if (playerChoice === skynetChoice) {
            winner.textContent = 'It is a tie!';
            setTimeout(() => {
                updateHands();
            }, 1000);
            return;
        }

        if (playerChoice === 'rock') {
            if (skynetChoice === 'scissors') {
                winner.textContent = 'Player wins!';
                playerScore++;
                updateScore();
                setTimeout(() => {
                    updateHands();
                }, 1000);
                return;
            } else {
                winner.textContent = 'Skynet wins!';
                skynetScore++;
                updateScore();
                setTimeout(() => {
                    updateHands();
                }, 1000);
                return;
            }
        }

        if (playerChoice === 'scissors') {
            if (skynetChoice === 'paper') {
                winner.textContent = 'Player wins!';
                playerScore++;
                updateScore();
                setTimeout(() => {
                    updateHands();
                }, 1000);
                return;
            } else {
                winner.textContent = 'Skynet wins!';
                skynetScore++;
                updateScore();
                setTimeout(() => {
                    updateHands();
                }, 1000);
                return;
            }
        }

        if (playerChoice === 'paper') {
            if (skynetChoice === 'rock') {
                winner.textContent = 'Player wins!';
                playerScore++;
                updateScore();
                setTimeout(() => {
                    updateHands();
                }, 1000);
                return;
            } else {
                winner.textContent = 'Skynet wins!';
                skynetScore++;
                updateScore();
                setTimeout(() => {
                    updateHands();
                }, 1000);
                return;
            }
        }
    }

    startGame();
    playMatch();
}

game();