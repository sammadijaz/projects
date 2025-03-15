const elBody = document.querySelector("body");

elBody.addEventListener("mousemove", (event) => {
    
    // console.log("moved");
    

    // Storing positon of the mouse
    const positionX = event.offsetX;
    const positionY = event.offsetY;
    // console.log(positionX, positionY);


    // Creating span elements and positiong them 
    const elSpan = document.createElement("span")
    elSpan.style.left = positionX + "px";
    elSpan.style.top = positionY + "px";
    

    // Adding spans into the body element
    elBody.appendChild(elSpan)
    

    // Creating different sizes of hearts
    const randomSize = Math.random() * 100;
    elSpan.style.height = randomSize + "px";
    elSpan.style.width = randomSize + "px";
    

    // Removing span elements after some time
    setTimeout(() => {
        elSpan.remove();
    }, 3000)

})


// function trying (){
//     elBody.addEventListener("mousemove", (event) => {
//     // Storing position of the mouse
//     const positionX = event.offsetX;
//     const positionY = event.offsetY;

//     // Array of letters to display
//     const arr = ['G', 'a', 'l', 'i', 'n', 'a'];

//     // Creating span elements for each letter in the array
//     arr.forEach((val) => {
//         const elSpan = document.createElement("span");
//         elSpan.textContent = val; // Set the text content to the letter
//         elSpan.style.position = "absolute"; // Ensure the span is positioned absolutely
//         elSpan.style.left = positionX + "px";
//         elSpan.style.top = positionY + "px";

//         // Adding spans into the body element
//         elBody.appendChild(elSpan);

//         // Creating different sizes of hearts
//         const randomSize = Math.random() * 100;
//         elSpan.style.height = randomSize + "px";
//         elSpan.style.width = randomSize + "px";

//         // Removing span elements after some time
//         setTimeout(() => {
//             elSpan.remove();
//         }, 3000);
//     });
// });
// }


