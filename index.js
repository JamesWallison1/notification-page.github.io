const notificationNum = document.querySelector("#to-be-read");
const markRead = document.querySelector("#mark-as-read");
const unreadMes = document.querySelectorAll(".unread-message");
const dotVisible = document.querySelectorAll(".dot");
const toWatch = document.querySelectorAll('.unread-message');

markRead.addEventListener("click", () => {
  notificationNum.innerText = "0";
  unreadMes.forEach((mes) => {
    mes.style.backgroundColor = "white";
  })
  dotVisible.forEach((dot) => {
    dot.style.display = "none";
  })
})

toWatch.forEach((unmes) =>{
    unmes.addEventListener("click", ()=>{
        unmes.style.backgroundColor = "white";
        let dot = unmes.querySelector(".dot");
        dot.remove();
        decrease();
    })
})

function decrease(){
    notificationNum.innerText = parseInt(notificationNum.innerText) - 1;
}