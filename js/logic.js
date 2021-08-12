document.addEventListener('DOMContentLoaded', createDivs);

function resizeSquare(){
    const size = prompt("Type a number between 2 and 20:");
    const container = document.getElementById('square');
    container.innerHTML = "";
    document.documentElement.style.setProperty("--colNum", size);
    document.documentElement.style.setProperty("--rowNum", size);

    let counter = 0;

    while (counter<size**2){
        const div = document.createElement('div');
        div.classList.add("myStyle");

        container.appendChild(div);
        counter++;
        console.log("Resizing.");
    }
}

function createDivs(){
    let counter = 0;

    const container = document.getElementById('square');
    container.innerHTML = "";
    document.documentElement.style.setProperty("--colNum", 16);
    document.documentElement.style.setProperty("--rowNum", 16);

    while (counter<256){
        const div = document.createElement('div');
        div.classList.add("myStyle");

        container.appendChild(div);
        counter++;
        console.log("Function running.");
    }
}




