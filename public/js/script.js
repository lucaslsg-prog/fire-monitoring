function initMap() {
    
    const position_gateway = {
        lat: -3.08793016,
        lng: -59.96295106
    };
    const position_node1 = {
        lat: -3.088281,
        lng: -59.962747
    };
    const position_node2 = {
        lat: -3.087910,
        lng: -59.963283
    };
    const position_node3 = {
        lat: -3.087605,
        lng:  -59.962932
    };

    const mapOptions = {
      zoom: 18,
      center: position_gateway
    };

    const map = new google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );
    
    
    const gateway = new google.maps.Marker({ position: position_gateway, map,label:'LoRa Gateway'});
    const node_ufam_01 = new google.maps.Marker({ position: position_node1, map,label:'node-ufam-01',animation: google.maps.Animation.DROP});
    const node_ufam_02 = new google.maps.Marker({ position: position_node2, map,label:'ufam-modem-01',animation: google.maps.Animation.DROP});
    const node_ufam_03 = new google.maps.Marker({ position :position_node3, map,label:'ufam-modem-02',animation: google.maps.Animation.DROP});

    //debugger
    
    node_ufam_01.addListener('click', toggleBounce);//evento seria uplink
    node_ufam_02.addListener('click', toggleBounce);
    node_ufam_03.addListener('click', toggleBounce);
    document.querySelector(".whiteWindow").addEventListener('click', ()=>document.querySelector(".whiteWindow").style.display = "none");//() => mesma coisa q uma função
    
    //let infowindow = new google.maps.InfoWindow({content: "No data"});
    const gaugeElement1 = document.querySelector(".gauge1");
    const gaugeElement2 = document.querySelector(".gauge2");
    
    function setGaugeValue(gauge1,gauge2,value1,value2){
        //document.getElementById("pop-up").style.display = "block";
        if(value1 < 0 || value1 > 1){
            return;
        }
        if(value2 < 0 || value2 > 1){
            return;
        }
                        
        gauge1.querySelector(".gauge_fill1").style.transform = `rotate(${value1/2}turn)`;
        gauge1.querySelector(".gauge_cover1").textContent = `${Math.round(value1 * 100)}ppm`;
        
        gauge2.querySelector(".gauge_fill2").style.transform = `rotate(${value2/2}turn)`;
        gauge2.querySelector(".gauge_cover2").textContent = `${Math.round(value2 * 100)}ppm`;
        }
    
    function toggleBounce(event) {
        //setGaugeValue(gaugeElement1,gaugeElement2,0.9,0.36);
        document.querySelector(".whiteWindow").style.display = "block"
      //infowindow.open(map,this)//mostrar a janela do marcador clicado
        //animação para node 1 interagir com o click
        if (this.getAnimation() !== null) {//condição seria payload diferente de vazio
            this.setAnimation(null);
        } else {
          this.setAnimation(google.maps.Animation.BOUNCE);
        }
    
    }
}

    



  
