document.addEventListener("readystatechange" , (event) => {
    if(event.target.readyState === "complete"){
        console.log("complete");
        initApp();
    }
},false);


const initApp = () => {
    const colors = ["red" , "black" , "green" , "blue" , "purple"];
    const color = document.querySelector(".color");
    const btn = document.querySelector(".btn");
    const main = document.querySelector("main");
    btn.addEventListener("click" , (event) =>{
        const random = Math.floor(Math.random() * colors.length);
        main.style.backgroundColor = colors[random];
        color.textContent = colors[random];
    })
}