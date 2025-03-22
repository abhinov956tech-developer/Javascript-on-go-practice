const fs = require('fs')
const path = require('path')

const datafolder = path.join('data')
console.log(datafolder);

if(!fs.existsSync(datafolder)){
    fs.mkdirSync(datafolder)
    console.log("Data folder created successfully");
     
}

const filepath = path.join(datafolder, "example.txt")
//synchronous way of creating file
fs.writeFileSync(filepath,"Hello learning NodeJs");
console.log("File created successful");

const readfile = fs.readFileSync(filepath, "utf8")
console.log("Read Content:", readfile);

console.log("successfully read ");

fs.appendFileSync(filepath, '\n from youtube');
console.log("Added new line");

const newreadfile = fs.readFileSync(filepath, "utf8")
console.log("Read Content:", newreadfile);

//Asynchronous way of creating file

const asyncfilepath = path.join(datafolder, "asyncexample.txt")
fs.writeFile(asyncfilepath, "Hello learning NodeJs in async way", (err) => {
    if(err) throw err;
    console.log("File created successfully");

    fs.readFile(asyncfilepath,'utf-8', (err,data)=>
    {
        if(err) throw err;
        console.log("Read file content:",data)
    })
   
    fs.appendFile(asyncfilepath,"\n hey nodejs", (err)=>
    {
        if(err) throw err;
        console.log("New line is added successfully");

        fs.readFile(asyncfilepath,'utf-8', (err,updateddata)=>
            {
                if(err) throw err;
                console.log("Read file new content:",updateddata)
            })
    });
   
    
    
})