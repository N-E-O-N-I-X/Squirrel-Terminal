const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Массив с вариантами мяуканья и мурлыканья
const responses = [
    "Chuk-chuk", "Squeak-squeak", "Tsk-tsk-tsk"
];

// Массив с эмоциями для ответов Purrfect AI
const emotions = [
    "happily", "curiously", "sleepily", "grumpily", "excitedly", "playfully", "angrily", "hungrily", "lovingly", "confusedly"
];

// Массив с разными звуками для вариативности
const meowSounds = [
    new Audio("squirrel.mp3"),
];

// Функция для получения случайного ответа кота с эмоцией
function getPurrfectResponse() {
    const emotion = emotions[Math.floor(Math.random() * emotions.length)];
    const response = responses[Math.floor(Math.random() * responses.length)];
    return `${response} (${emotion})`;
}

// Функция для воспроизведения случайного звука из массива
function playRandomMeowSound() {
    const randomSound = meowSounds[Math.floor(Math.random() * meowSounds.length)];
    randomSound.play();
}

// Функция для добавления сообщения в чат
function addMessage(content, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
    messageDiv.textContent = content;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Обработка отправки сообщения
sendButton.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, "user");
        userInput.value = "";

        // Ответ Purrfect AI через небольшую задержку
        setTimeout(() => {
            const purrfectResponse = getPurrfectResponse();
            addMessage(purrfectResponse, "bot");
            
            // Воспроизведение случайного звука
            playRandomMeowSound();
        }, 500);
    }
});

// Отправка сообщения по нажатию Enter
userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendButton.click();
    }
});
