let message = document.getElementById("box_message");
let checkbox = document.getElementById("checkbox");

function dont_click(e){
    message.innerText = "I TOLD YOU NOT TO CLICK THIS!";
    e.preventDefault()
}

checkbox.addEventListener("click", dont_click);