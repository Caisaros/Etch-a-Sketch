let grid = document.querySelector("#gridContainer");
// let isPressed = false;

function rows(size) {
    for (let i = 0; i < (size * size); i++) {
        let divRow = document.createElement("div");
        divRow.className = "rows";
        divRow.style.backgroundColor = "white";
        grid.appendChild(divRow);
    }
};

rows(16);

// grid.addEventListener("mousedown", () => {isPressed = true});
// grid.addEventListener("mouseup", () => {isPressed = false});
// grid.addEventListener("mousemove", (e) => {isPressed ? e.target.style.backgroundColorolor = "blue" : e.target.backgroundColor = "white"});