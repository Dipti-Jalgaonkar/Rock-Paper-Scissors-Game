let checker = (input) => {
    var choices = ["rock", "paper", "scissors"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML = 
        `Computer chooses <span>${choices[num].toUpperCase()} </span>`;
}