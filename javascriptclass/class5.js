const object = {
    name : "log",
    class : "cse-p",
    subject : ["ai" , "maths" , "DAA" , "CA" , "os" , "python"],
    action : function(){
        return "sleep";
    }
};

//console.log(object.name);
const jsonform =JSON.stringify(object);
console.log(jsonform);

const json_to_object = JSON.parse(jsonform);
console.log(json_to_object);