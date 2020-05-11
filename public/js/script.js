


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
    //document.getElementById("content").addEventListener('click', ()=>document.getElementById("content").style.display = "none");//() => mesma coisa q uma função
    
    const conteudo = 'teste';
    let infowindow = new google.maps.InfoWindow({content: conteudo});
    
    
    function toggleBounce(event) {
      
        infowindow.open(map,this)//mostrar a janela do marcador clicado
        //animação para node 1 interagir com o click
        if (this.getAnimation() !== null) {//condição seria payload diferente de vazio
            this.setAnimation(null);
        } else {
          this.setAnimation(google.maps.Animation.BOUNCE);
        }
    
    }

  }
