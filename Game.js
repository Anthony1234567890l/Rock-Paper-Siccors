h = 0
for(var i = 0; i < 5; i++){ 
    function playRound(playerSelection, computerSelection, h, counter) {
        const playerSelection = 
            playerSelection = playerSelection.toLowerCase(); 
       if(playerSelection == 'rock' && computerSelection =='scissors'){
                console.log("You won rock beats scissors");
                coutner = +1;
                
            }
            else if (playerSelection == 'scissors' && computerSelection == 'rock'){
                console.log("You lost rock beats scissors");
                countner = -1;
                
    
            }
            else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
                console.log("You tie");
                countner = +0;
                
    
            }
            else if (playerSelection == 'paper' && computerSelection == 'rock'){
                console.log("You won paper beats rock");
                countner = +1;
                
    
            }
            else if (playerSelection == 'rock' && computerSelection == 'paper'){
                console.log("You lost paper beats rock");
                countner = -1;
                
    
            }
            else if (playerSelection == 'paper' && computerSelection == 'paper'){
                console.log("You lost rock beats scissors");
                countner = +0;
                
    
            }
            else if (playerSelection == 'rock' && computerSelection == 'rock'){
                console.log("You tie");
                countner = +0;
                
    
            }
  
}


    l
    
    function computerchoice(random){
        let random = math.floor(Math.random()* 3);
        let choice; 
        if(random = 0){
            let choice = 'rock';
        }
        if(random = 1){
            let choice= 'paper';
        }
        if(random = 2){
            let choice = 'scissors';
        }

    console.log(choice);
}
    

            
    h = 5 - counter;
    return(counter, h);
    console.log(counter, h);

    const playerSelection = prompt("Choose paper, rock or scissor: ");
    const computerSelection = ComputerChoice();
    playRound(playerSelection, computerSelection);

}
   const playerSelection = prompt("Choose paper, rock or scissor: ");
    const computerSelection = ComputerChoice();
    playRound(playerSelection, computerSelection);





  
