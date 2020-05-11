const socket = io('http://localhost:3000/');
socket.on("chegou", (msg)=>{
    console.log('msg',msg);
    

});