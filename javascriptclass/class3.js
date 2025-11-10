// if parameter named with underscore it means private but not act as private

class log{
    constructor(size){
        this.size = size ;
        this.crust = "thin";
    }
    getToppings(){
        return console.log(this.crust);
    }
    setToppings(value){
        this.crust = value;
    }
};

class log2 extends log{
    constructor(size){
        super(size);
        this.type = "margaritta";
    }

    slices(){
        return console.log(`our pizza ${this.type} with ${this.size} ${this.crust} size has 8 slices`);
    }
};

const obj1 = new log2("large");
const obj2 = new log("medium");
obj1.slices();

obj1.setToppings("Thin");
obj1.getToppings();