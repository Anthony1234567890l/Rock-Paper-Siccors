countergame = 0
function computerchoice(){
    let random = math.floor(Math.random()* 3)
    let choice; 
    if(random = 0){
        let choice = 'rock'
    }
    if(random = 1){
        let choice= 'paper'
    }
    if(random = 2){
        let choice = 'scissors'
    }
    return choice


}
counter = 0

function play5rounds(playerSelection, computerSelection, countergame, counter){
    countergame = +1
    const playerSelection = prompt("Choose paper, rock or scissor: ");
  const computerSelection = getComputerChoice();
    function playRound(playerSelection, computerSelection, counter) {
        counter = 0
        playerSelection = playerSelection.toLowerCase() 
        if(playerSelection == 'rock' && computerSelection =='scissors'){
            return("You won rock beats scissors")
            coutner = +1
        }
        else if (playerSelection == 'scissors' && computerSelection == 'rock'){
            return("You lost rock beats scissors")
            countner = -1

        }
        else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
            return("You tie")
            countner = +0

        }
        else if (playerSelection == 'paper' && computerSelection == 'rock'){
            return("You won paper beats rock")
            countner = +1

        }
        else if (playerSelection == 'rock' && computerSelection == 'paper'){
            return("You lost paper beats rock")
            countner = -1

        }
        else if (playerSelection == 'paper' && computerSelection == 'paper'){
            return("You lost rock beats scissors")
            countner = +0

        }
        else if (playerSelection == 'rock' && computerSelection == 'rock'){
            return("You tie")
            countner = +0

        }

        return counter
    
      }
}

const playerSelection = prompt("Choose paper, rock or scissor: ");
  const computerSelection = getComputerChoice();
  console.log(play5rounds(playerSelection, computerSelection))
  console.log(play5rounds(playerSelection, computerSelection))
  console.log(play5rounds(playerSelection, computerSelection))
  console.log(play5rounds(playerSelection, computerSelection))
  console.log(play5rounds(playerSelection, computerSelection))
console.log("You win")


  