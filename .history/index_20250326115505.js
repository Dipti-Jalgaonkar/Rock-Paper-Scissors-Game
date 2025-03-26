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
    console.log(choices[0]);
    console.log(input);

    document.getElementById("comp_choice").innerHTML = 
        `Computer chooses <span>${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML = 
        `User chooses <span>${input.toUpperCase()}</span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]) {
        case 'win': 
            result_ref.innerHTML = "YOU WIN";
            break;
        case 'lose': 
            result_ref.innerHTML = "YOU LOSE";
            break;
        default: 
            result_ref.innerHTML = "DRAW";
            break;
    }
}
