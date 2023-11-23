//Getting and Setting Buttons
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["←", "/", "*", "-", "+", "=", "%"];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "C") {
        output = "";
    } else if (btnValue === "←") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) {
            return;
        }
        output += btnValue;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

// Add event listener for keyboard events
document.addEventListener("keydown", (e) => {
    const key = e.key;
    // Check if the pressed key corresponds to a button's data-value
    const button = Array.from(buttons).find((btn) => btn.dataset.value === key);
    if (button) {
        button.click(); // Simulate a click on the corresponding button
    }
});




