const socket = io('http://localhost:3000/');


function markerAction(event) {

    $("#modalDevice").modal();
   
    socket.on("chegou", (msg)=>{
        console.log('msg',msg);
        $("#gaugeGas").attr("data-value",msg.payload_field.payload_gas);  
    });
    //animação para node 1 interagir com o click
    if (this.getAnimation() !== null) {//condição seria payload diferente de vazio
        this.setAnimation(null);
    } else {
      this.setAnimation(google.maps.Animation.BOUNCE);
    }

}