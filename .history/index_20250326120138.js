let [computer_score, user_score] = [0,0]
let result_ref = document.getElementById("result");
let choices_object = {
    'rock': {
        'rock': 'draw',
        'scissors': 'win',
        'paper': 'lose'
    },
    'scissors': {
        'rock': 'lose',
        'scissors': 'draw',
        'paper': 'win'
    },
    'paper': {
        'rock': 'win',
        'scissors': 'lose',
        'paper': 'draw'
    },
    
}

let checker = (input) => {
    var choices = ["rock", "paper", "scissors"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML = 
        `Computer chooses <span>${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML = 
        `User chooses <span>${input.toUpperCase()}</span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]) {
        case 'win': 
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose': 
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default: 
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW";
            break;
    }
}
