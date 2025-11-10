document.addEventListener("readystatechange" , (event) => {
    if(event.target.readyState === "complete"){
        console.log("complete");
        initApp();
    }
},false);

const initApp =() =>{
    const view = document.querySelector("#view3");
    const form = view.querySelector("#myForm");
    form.addEventListener("submit" ,(event) =>{
        event.preventDefault();
        console.log("form submitted");
    })
}