console.log("hello word");



/*-------------------------------------------------------*/
const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*---------------------------------------------------------*/
fs.appendFile ("welcome.txt","hello word",function(err){
    if (err)throw err;
    console.log ("saved!")
})
/*------------------------------------------*/
const fs = require('node:fs');
fs.readFile('./welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});