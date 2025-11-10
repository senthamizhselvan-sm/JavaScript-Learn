//Generative function

function mypizza(value){
    const crust = value;
    const size = "large";
    return {
        bake : ()=> console.log(`pizza with ${size} size and crust ${crust}`)
    }
};


//console.log(mypizza("Thin"))
//const obj1 = new mypizza("Thin");
//obj1.bake();

class private11{
    size = "large";
    #pri = "Notaccessible";
    constructor(value){
        this.type = "value";
    }

    getMethod(){
        return this.pri;
    }

    setmethod(value){
        this.size = value;
    }

    bake(){
        return console.log(`pizza with ${this.size} and ${this.#pri} type ${this.type}`);
    }
}

const obj1 = new private11("margaritta");
//console.log(obj1.#pri)
obj1.bake();
obj1.setmethod("summa");
obj1.bake();
obj1.size = "medium";
obj1.bake();
//obj1.#pri = "value";