const msgs = [
    "Are you sure?",
    "Are you really sure?",
    "Are you really really sure?",
    "Pretty pleaseeeee?",
    "Pretty pretty pleaseeeee?",
    "If you say no, I will be very sad...",
    "I will be very sad...",
    "I will be very very sad...",
    "Okay, I'm done...you can go now.",
    "Just kidding, say yes please! 🩷"
]

let msgIndex = 0;

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function handleNoClick() {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    noButton.textContent = msgs[msgIndex];
    msgIndex = (msgIndex + 1) % msgs.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}