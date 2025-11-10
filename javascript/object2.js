const movie = {
    dir : "Lokesh",
    actor : "Vijay",
    heroine : "Trisha",
    Villain : "Sanjay Dutt",
    Music : "Anirudh"
};
console.log(movie.hasOwnProperty("heroine"));
delete movie.heroine;
console.log(movie.hasOwnProperty("heroine"));
for(let role in movie){
   // console.log(`${role} :  ${movie[role]}`);
   
}
//destructuring the objects
//const {actor : myfavactor , Villain : father} = movie;
const {actor , Villain , dir , Music} = movie;
//console.log(actor , Villain , dir , Music);

function name({actor}){
    return actor;
};

console.log(name(movie));