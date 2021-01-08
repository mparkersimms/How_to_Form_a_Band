function showImages(){
    let userNumber = prompt('How many band members do you want? 1-5?')
    while (userNumber < 1 || userNumber > 5){
        userNumber = prompt('Thats not right.. pick a number between 1 and 5!')
    }
    for(let i = 0; i < userNumber; i++){
        document.write('<li><img src="https://st4.depositphotos.com/25464256/28140/v/1600/depositphotos_281407364-stock-illustration-guitar-icon-logo-vector-illustration.jpg" id="icon"></li>') 
    }
}

showImages();

let correctAnswer = 25;

function guessingGame(){ 
    let userAnswer = prompt(' Please select a number between 1 and 50');
    while (userAnswer < 1 || userAnswer > 50){
        userAnswer = prompt(' incorrect.. Please select a number between 1 and 50');
    }
    let numberOfGuesses = 10
    for(let i = 0; i < numberOfGuesses; i++){
        if (userAnswer == correctAnswer){
            alert('Great Job! You guessed it right!!');
            break; 
        } else if (userAnswer < correctAnswer){ 
            alert('Sorry, your guess was too low..');
            userAnswer = prompt(' Please select a number between 1 and 50');
            
        } else if (userAnswer > correctAnswer){
            alert('Sorry, your guess was too high..');
            userAnswer = prompt(' Please select a number between 1 and 50');
            
        }
    }
}

