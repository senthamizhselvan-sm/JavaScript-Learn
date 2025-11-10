const view = document.querySelector("#view2");

console.log(view);


const h2 = view.querySelector("h2");
console.log(h2);

//syntax
//eventlistener(event , function , usecapture)

const dosomething = () => {
    alert("doing something");
};

h2.addEventListener("click" , dosomething , false);
h2.removeEventListener("click" , dosomething , false);

//h2.addEventListener("click" , (event) =>{
//    console.log(event.target);
//    event.target.textContent = "this is changed one";
//
//},false);

document.addEventListener("readystatechange" , (event) => {
    if(event.target.readyState === "complete"){
        console.log("complete");
        initApp();
    }
},false);

const initApp = () =>{
    const view = document.querySelector("#view2");
    const h2 = view.querySelector("h2");
    view.addEventListener("click" , (event) => {
        //event.stopPropagation();
        //event.target.style.backgroundColor = "purple";
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    });
    h2.addEventListener("click" , (event) =>{
       event.stopPropagation();
       h2.classList.toggle("black");
       if(h2.classList.contains("black")){
        event.target.textContent = "changed one";
       }
       else{
        event.target.textContent = "my 2nd view";
       }
    });
    //event bubbling up
    //to stop bubbling use event.stopPropagation()
};