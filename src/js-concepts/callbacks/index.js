const fs = require('fs')

function person(name,callbackfn) {
    console.log(`hello ${name}`);
    callbackfn
    
}

function address() {
    console.log('Assam');
    
}
person("Abhinov", address)

fs.readFile('input.txt','utf8',(err,data)=>{
    if(err){
        console.error("Error in reading file")
    }
    console.log(data);
    
})