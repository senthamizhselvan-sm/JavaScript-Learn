//DOM

const viewobj1= document.getElementById("view1");
console.log(viewobj1);

const viewobj2 = document.querySelector("#view2");
console.log(viewobj2);
//flex to see style
viewobj1.style.display = "flex";
viewobj2.style.display = "flex";

const views1 = document.getElementsByClassName("view");
console.log(views1);

const views2 = document.querySelectorAll(".view");
console.log(views2);

const divs = viewobj1.querySelectorAll("div");
console.log(divs);

const samedivs = viewobj1.getElementsByTagName("div");
console.log(samedivs);

const evendivs = viewobj1.querySelectorAll("div:nth-of-type(2n)");
console.log(evendivs);

evendivs[3].style.backgroundColor = "black";

for(i=0;i<evendivs.length;i++){
    evendivs[i].style.backgroundColor = "purple";
     evendivs[i].style.width = "150px";
}

const navtext = document.querySelector("nav h1");
console.log(navtext);
navtext.textContent = "HELLO I AM JAVASCRIPT";

const navi = document.querySelector("nav");
console.log(navi);
navi.innerHTML = "<h1>SUDO JUST DO IT</h1>";

console.log(evendivs[0].parentElement.children);
console.log(evendivs[0].parentElement.childNodes);
console.log(evendivs[0].parentElement.lastChild);
console.log(evendivs[0].parentElement.lastElementChild);
console.log(evendivs[0].parentElement.firstChild);
console.log(evendivs[0].parentElement.firstElementChild);
console.log(evendivs[0].previousSibling);
console.log(evendivs[0].previousElementSibling);
console.log(evendivs[0].nextSibling);
console.log(evendivs[0].nextElementSibling);


 viewobj1.style.display = "none";
 viewobj2.style.display = "flex";
 viewobj2.style.flexDirection = "row";
 viewobj2.style.flexWrap = "wrap";
 viewobj2.style.margin = "10px";
 console.log(viewobj2.lastElementChild);
 viewobj2.lastElementChild.remove();
 while(viewobj2.lastChild){
    viewobj2.lastChild.remove();
 }
  
 const createDiv = (parent , iter) =>{
     const mydiv = document.createElement("div");
     mydiv.textContent = iter;
     mydiv.style.width = "100px";
     mydiv.style.height = "100px";
     mydiv.style.margin = "10px";
     mydiv.style.backgroundColor = "orange";
     mydiv.style.color = "balck";
     mydiv.style.display = "flex";
     mydiv.style.alignItems = "center";
     mydiv.style.justifyContent = "center";
     parent.append(mydiv);
 }

 for(let i = 1 ; i <= 12 ; i++){
      createDiv(viewobj2 , i )
 }

