const activateBtn = document.getElementById("activateBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

activateBtn.onclick = () => {
    modal.style.display = "flex";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
};

let total = 600;

function updateTimer(){

    const minutes = Math.floor(total / 60);
    const seconds = total % 60;

    document.getElementById("countdown").textContent =
        `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;

    if(total > 0){
        total--;
    }
}

setInterval(updateTimer,1000);
updateTimer();

