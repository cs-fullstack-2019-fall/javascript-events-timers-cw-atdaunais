let textInput = document.getElementById("txt_input");
let start_text = document.getElementById("start");
let allow_button = document.getElementById("allow_btn");
let disallow_button = document.getElementById("disallow_btn");

allow_button.addEventListener("click", allowTyping);
disallow_button.addEventListener("click", disallowTyping);

function allowTyping(){
    textInput.removeAttribute("disabled");
    start_text.removeAttribute("hidden");
}

function disallowTyping() {
    textInput.setAttribute("disabled", "");
    start_text.setAttribute("hidden", "");
}