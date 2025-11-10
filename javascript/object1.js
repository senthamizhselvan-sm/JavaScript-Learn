const vehicle = {
    door : 2,
    engine : function(){
        return "Dodge 2000";
    }
};

const car = Object.create(vehicle);
console.log(car.engine());
car.wheels = 4;
car.engine = function(){
    return "summa";
}
console.log(car);
console.log(car.engine());

const tataev = Object.create(car);
tataev.engine = function(){
    return "smooth";
}
console.log(tataev.engine());
console.log(Object.keys(tataev));
console.log(Object.values(vehicle));