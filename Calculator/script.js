const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        const value = button.getAttribute("data-value");

        if (value === "C") {
            // Clear the display
            expression = "";
            display.value = "";

        } else if (value === "DEL") {
            // Delete the last character
            expression = expression.slice(0, -1);
            display.value = expression;

        } else if (value === "=") {
            // Calculate the result
            try {
                expression = eval(expression).toString();
                display.value = expression;
            } catch (error) {
                display.value = "Error";
                expression = "";
            }

        } else {
            // Add the clicked value to the expression
            expression += value;
            display.value = expression;
        }

    });
});