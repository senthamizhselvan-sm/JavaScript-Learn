//custom error

const add = (a,b) =>{
    try{
      if(a===b){
        throw new Error("two nums are equal");
      }
    }
    catch(err){
        console.log(err.stack);
    }
    finally{
        console.log("finally block")
    }
};

/*unction ourError(message){
  this.message = message;
  this.name = "customerror";
  this.stack = `${this.name} : ${this.message}`;
};  use Error*/

add(1,1);