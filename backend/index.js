//express is an npm package 
//in http it is low level
//khud se routing krni pdti h so in express uses http interanlly 
//it give you routing
import { Socket } from 'dgram';
import express from 'express'


//node js has built in module called http
import http from 'http'


import { Server } from "socket.io"

//express() is a function call 
//return an express application that represent web app

const app=express()
//this app has no routing
//created our own server using thid module

const server=http.createServer(app);
//made server using http to have more control over routing
//and for web socket integration

const io= new Server(server,{
    cors: {
        origin : "*",
    },
});

//core mtlb hm isee khana kahan use krskte h and * menas hm 
//ise knih bhi use kr stke h





//****** USER JOIN FUNCTIONALITY */



io.on("connection", (socket)=>{
    console.log("user connected",socket.id);
});


const port=process.env.PORT || 5000;





//process.env contains environment variables
//PORT is a common environment variable used by hosting platforms (Heroku, Railway, etc.)
//If PORT environment variable doesn't exist (like in local development)
//The server defaults to port 5000


//server ko listen krwana h iss port pe
server.listen(port,()=>{
    console.log('server is working on port 5000')
});


//server.listen(...) starts your backend and tells it to listen for requests on that port.

//The () => { ... } is a callback function that runs when the server starts successfully.



//express backend server bnati h and yahan we have module named express
//import something from 'express'(module)
  
//An HTTP server is a computer program or a piece of software that serves web pages to users over the internet by handling HTTP (Hypertext Transfer Protocol) requests