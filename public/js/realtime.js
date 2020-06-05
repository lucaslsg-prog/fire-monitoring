//direcionamento da msg do device para a pagina web

const socket = io('http://localhost:3000/');

const gaugeGas = document.querySelector(".gauge_gas");
const gaugeFire = document.querySelector(".gauge_fire");

function getDataFromDevice(deviceName){
    
    console.log('Listening data for device: ' + deviceName);
    
    socket.on("chegou", (msg)=>{
        console.log('msg',msg.payload_field);
    });

    //Apenas para popular o gauge enquanto os dados reais nao chegam
    setInterval(()=>{
      setGaugeValue(gaugeGas, Math.random());
      setGaugeValue(gaugeFire, Math.random());          
    }, 3500);
}

function toggleBounce(event) {

    getDataFromDevice(this.label);
    $('#modalDevice').modal();
    $('#titleDevice').html(this.label);

    //animação para node 1 interagir com o click
    if (this.getAnimation() !== null) {//condição seria payload diferente de vazio
        this.setAnimation(null);
    } else {
      this.setAnimation(google.maps.Animation.BOUNCE);
    }
}

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${value / 2}turn)`;

  if(gauge.classList.value === 'gauge gauge_fire'){
    gauge.querySelector(".gauge__fill").style.background = `#e44b25`;
  }

  gauge.querySelector(".gauge__cover").textContent = `${Math.round(value * 100)}%`;
}

setGaugeValue(gaugeGas, 0.3);
setGaugeValue(gaugeFire, 0.5);