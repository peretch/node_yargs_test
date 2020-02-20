const fs = require('fs');

const createFile = (base, limit) => {

    return new Promise ((resolve, reject) => {

        if(!Number(base)){
            reject(`"${base}" Is not a number`);
            return;
        }
        const data = [];
        
        for(let i = 1; i <= 10; i++){
            data.push(`${base} x ${i} = ${base * i}`);
        }
        
        fs.writeFile(`tables/table-${base}-to-${limit}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`table-${base}-to-${limit}.txt`);
        });
    });
}

const listTable = (base, limit) => {
    console.log(`---MULTIPLICATION TABLE IN BASE ${base} TO ${limit}---`);
    for(let i = 1; i <= limit; i++){
        console.log(`${base} x ${i} = ${base * i}`);
    }
}

module.exports = { createFile, listTable };