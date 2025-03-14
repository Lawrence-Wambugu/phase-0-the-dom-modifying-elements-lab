// Write your code here!
let mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove();
}
let newHeader = document.createElement('h1');
newHeader.id = 'victory'; 
newHeader.textContent = "Lawrence Wambugu is the champion";

document.body.appendChild(newHeader);