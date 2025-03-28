const fs = require('fs')

fs.readFile('input.txt',"utf8", (err,data)=>{
    if(err){
        console.error("Error in reading file")
    }

    const modifyfileData = data.toUpperCase();
    fs.writeFile('output.txt',modifyfileData, (err)=>{
        if(err){
            console.error("Error writing file")
            return;
        }
        console.log("Data written to new file");

        fs.readFile("output.txt",'utf8',(err, data)=>{
            if(err){
                console.error("Error in reading file")
            }
            console.log(data);
            
        })
        
    })
})