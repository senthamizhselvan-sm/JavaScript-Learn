"use strict";

function trycatch(){
    try{
        const vari = "selva";
        vari = "Tamil";
    }
    catch(err){
       // console.log(err) // warn for warning // table for table the error about detail
       //err.name type of error stack for all detail
       console.error(err.stack);
    }
};

trycatch();