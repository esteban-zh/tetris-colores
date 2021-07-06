const boxes=42;
function changeColor(){
    let select =document.getElementById("color");
    let selectedColor = select.options[select.selectedIndex].text;
    for (let index = 1; index<boxes +1; index++){
        let element =document.getElementById(`box-${index}`);
        element.addEventListener("click", (event) => (event.target.style.backgroundColor = selectedColor));
    }
}