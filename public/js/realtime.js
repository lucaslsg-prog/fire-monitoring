//direcionamento da msg do device para a pagina web

const socket = io('http://localhost:3000/');
socket.on("chegou", (msg)=>{
    console.log('msg',msg.payload_field);
});



