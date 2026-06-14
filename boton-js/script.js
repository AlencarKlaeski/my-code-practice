const button = document.getElementById("prompt-button");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    const userName = prompt ("Put here your name", "Alencar");
    
    if (userName) {
        output.textContent = `Hello, ${userName}! Welcome to my word!`;
    } else {
        output.textContent = "Hello, User! Welcome to my word!";
    }
});