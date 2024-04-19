countergame = 0
if countergame == 0 or 1 0r 2 0r 3 0r 4:
    
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
    
    
    
    
        const playerSelection = prompt("Choose paper, rock or scissor: ");
      const computerSelection = getComputerChoice();
            counter = 0
            playerSelection = playerSelection.toLowerCase() 
            if(playerSelection == 'rock' && computerSelection =='scissors'){
                return("You won rock beats scissors")
                coutner = +1
                countergame = +1
            }
            else if (playerSelection == 'scissors' && computerSelection == 'rock'){
                return("You lost rock beats scissors")
                countner = -1
                countergame = +1
    
            }
            else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
                return("You tie")
                countner = +0
                countergame = +1
    
            }
            else if (playerSelection == 'paper' && computerSelection == 'rock'){
                return("You won paper beats rock")
                countner = +1
                countergame = +1
    
            }
            else if (playerSelection == 'rock' && computerSelection == 'paper'){
                return("You lost paper beats rock")
                countner = -1
                countergame = +1
    
            }
            else if (playerSelection == 'paper' && computerSelection == 'paper'){
                return("You lost rock beats scissors")
                countner = +0
                countergame = +1
    
            }
            else if (playerSelection == 'rock' && computerSelection == 'rock'){
                return("You tie")
                countner = +0
                countergame = +1
    
            }
h = 5 - counter 
print(counter, h)


    
      


const playerSelection = prompt("Choose paper, rock or scissor: ");
  const computerSelection = getComputerChoice();
console.log("You win")


  
