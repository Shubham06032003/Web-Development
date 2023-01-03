// server creation 
// 1. http module
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log('request has been made from browser to server');
    // console.log(req.method);̥
    // console.log(req.url);
    // res.setHeader('Content-Type','text/plain');
    // res.write('Hello user ! :)');
    // res.end();
    let path='D:/Web Development';
    switch(req.url){
        case '/':
            path += '/clock.html';
            res.statusCode=200;
            break;
        case '/glow':
            path += '/Colourful glowing liquid.html'
            res.statusCode=200;
            break;
        case '/glow_me':
            res.statusCode=301;
            res.setHeader('location','/glow');
            res.end();
            break;
        default:
            path += '/404.html'
            res.statusCode=404;
            break;
    }

    fs.readFile(path, (err,filedata)=>{
        if(err){
            console.log(err);
        }
        else{
            // res.write(filedata);
            res.end(filedata);
        }
    });
});
// port no. , host , callback func
server.listen(3000,'localhost',()=>{
    console.log('server is listening on port 3000');
});