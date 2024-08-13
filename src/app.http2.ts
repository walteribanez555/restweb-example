import fs from 'fs';
import http2 from 'http2';


const server = http2.createSecureServer(  {
    key : fs.readFileSync('./keys/server.key'),
    cert : fs.readFileSync('./keys/server.crt'),
} ,(req , res ) => { 

    // console.log(req.url);

    // res.writeHead(200, { 'Content-Type' : 'text/html'});
    // res.write(`<h1>Url ${ req.url } </h1>`);

    // res.end();

  

    if( req.url === '/'){
        const htmlFile = fs.readFileSync('./public/index.html','utf-8');
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        res.end(htmlFile);
        return;
    }


    if( req.url?.endsWith('.js')){
        res.writeHead(200, {'Content-Type' : 'application/javascript'});
    }else if(req.url?.endsWith('.css')) {
        res.writeHead(200, {'Content-Type' : 'text/css'});
    }

    const responseContent = fs.readFileSync(`./public${req.url}`, 'utf-8');
    res.end(responseContent);

});



server.listen(3000, () => {
    console.log('Server running on port 8080')
});