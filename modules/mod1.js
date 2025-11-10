//export default function earn(){
  //  return "Earn money by learning";
//}

export const grow = () =>{
    return "Grow by earning";
}

export const give = () =>{
    return "Give by growing";
}

//export default earn;
//export {grow , give};

export default class Name{
    constructor(name){
        this._name = name;
    }
    chatwithme(){
        return `chat with me ${this._name}`;
    }
}