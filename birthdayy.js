const countdownDate = new Date("2024-09-24T09:30:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Happy Birthday!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Quiz
document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const answer = document.getElementById("q1").value.trim().toLowerCase();
    const correctAnswer = "pink"; // Replace with her favorite color or the correct answer
    const quizResult = document.getElementById("quizResult");

    if (answer === correctAnswer) {
        quizResult.textContent = "Correct! 🎉";
    } else {
        quizResult.textContent = "Galat Jawab! Wapas Prayas Kare! ☺";
    }
});
const audio = document.getElementById("myAudio");
    audio.volume=0.3;
    document.getElementById("playBtn").addEventListener("click", function() {
        audio.play();
    });
    document.getElementById("pauseBtn").addEventListener("click", function() {
        audio.pause();
    });
