document.addEventListener("readystatechange" , (event) => {
    if(event.target.readyState === "complete"){
        console.log("complete");
        initApp();
    }
},false);

const initApp = () =>{
    const myContent = ["learn","earn" , "grow"];
    const myobj ={
        name : "Selva",
        myContent : ["learn","earn" , "grow"],
        logName : function(){
            console.log(this.name);
        }
    };
    //window.
    localStorage.setItem(
        "sessionStorage" , JSON.stringify(myobj)
    );
    const key = localStorage.key(1);
    console.log(key);
    const key1 = localStorage.length;
    console.log(key1);
    const mysessiondata = JSON.parse(
        sessionStorage.getItem("sessionStorage")
    )
    console.log(mysessiondata);
    const key2 = localStorage.removeItem("sessionStorage");
    console.log(key);
}