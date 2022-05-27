
// filesystem in node js URL: https://nodejs.org/api/fs.html 

import {readFile , writeFile} from 'fs/promises'

let fileData = await readFile ('./index.html' , 'utf-8' ) // (err , res)=> console.log(res)

console.log('File Data before  : ' , fileData)

const data = {
    Title : 'my site' , 
    Name : 'Zain ul din'
}

console.log(data)

// replace in index.html
let res = fileData

for (const [k , v] of Object.entries(data))
     res = res.replace(`{${k}}` , v)
     
console.log('res : ' , res)     

// write back
await writeFile('./index.html' ,res)

/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>{Title}</h1>
    <h2>{Name}</h2>
</body>
</html>

*/