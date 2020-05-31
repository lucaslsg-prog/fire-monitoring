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
    
    node_ufam_01.addListener('click', markerAction);//evento seria uplink
    node_ufam_02.addListener('click', markerAction);
    node_ufam_03.addListener('click', markerAction);
    //document.getElementById("content").addEventListener('click', ()=>document.getElementById("content").style.display = "none");//() => mesma coisa q uma função
    
  }

  
