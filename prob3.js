let countdown_btn = document.getElementById("count_start");
let timer = document.getElementById("time_secs");
let seconds = 10;

function timer_func(){
    timer.innerText = seconds;
    seconds--;
    if (timer.innerText <= 0){
        timer.innerText = "LIFTOFF!!"
    }
}

function click_timer(){
    seconds = 10;
    let time_interval = window.setInterval(timer_func,1000);
}

countdown_btn.addEventListener("click", click_timer);
