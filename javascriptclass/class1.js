class log{
    constructor(type , size , cru){
        this.type = type;
        this.size = size ;
        this.crust = cru;
    }

    bake(){
        return console.log(`baked pizza with ${this.size} ${this.type} and ${this.crust} crust`);
    }
};

const newclass = new log("margaritta" , "large" , "original");
const newC = new log("MAGGI" , "THIN" , "SMALL");
newclass.bake();
newC.bake();