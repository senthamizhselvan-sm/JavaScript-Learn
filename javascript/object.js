const obj1 = {name : 'selva'};
const obj2 = {
    name : 'log',
    role : 'dev',
    salary : 500000,
    family : {
        son : 2,
        daughter : 1,
    },
    alive : true,
    languages : ['java' , 'cpp' , 'react-native'],
    action : function(){
        return `marry mia khalifa to get ${this.family.son} sons`;
    }
};
console.log(obj1.name);
console.log(obj2.languages[0]);
console.log(obj2["family"]);
console.log(obj2.action());