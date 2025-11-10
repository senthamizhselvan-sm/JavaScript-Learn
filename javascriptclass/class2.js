class log{
    constructor(type , size , cru){
        this.type = type;
        this.size = size ;
        this.crust = cru;
        this.toppings = [];
    }
    getToppings(){
        return this.toppings;
    }
    setToppings(value){
        this.toppings.push(value);
    }

    bake(){
        return console.log(`baked pizza with ${this.size} ${this.type} and ${this.crust} crust with toping ${this.toppings}`);
    }
};

const obj1 = new log("uppuma" , "bread" , "omlette" );
obj1.setToppings("sauce");
obj1.setToppings("jam");
obj1.bake();

