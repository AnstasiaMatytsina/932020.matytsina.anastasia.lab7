function clickOnFidure(event) {
    if (this.classList.contains("triangle")) {
        this.style.borderBottomColor = "black";
    } else {
        this.style.backgroundColor = "black";
    }
    this.onclick = event => this.remove();
}

function setFigure(type, size, x, y) {
    const figure = document.createElement("div");
    figure.classList.add("figure");
    figure.classList.add(type);
    figure.style.position = "fixed";
    
    if (type === "triangle") {
        figure.style.display = "inline-block";
        figure.style.border = `${size}px solid transparent`;
        figure.style.borderBottom = `${size}px solid blue`;
    }

    if (type === "circle") {
        figure.style.borderRadius = "100px";
        figure.style.backgroundColor = "yellow";
        figure.style.width = size + "px";
        figure.style.height = size + "px";
    }
    if (type === "square") {
        figure.style.width = size + "px";
        figure.style.height = size + "px";
        figure.style.backgroundColor = "red";
    }
    figure.style.left = `${x}px`;
    figure.style.top = `${y}px`;
    figure.addEventListener("click", clickOnFidure);
    document.getElementById("main").appendChild(figure);
}

function createFigure(type) {
    const count = document.getElementById("counter").value;
    for (let i = 0; i < count; i++) {
        setFigure(type, Math.random()*100, Math.random()*1000, Math.random()*1000);
    }
}