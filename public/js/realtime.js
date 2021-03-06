//direcionamento da msg do device para a pagina web

const socket = io('http://localhost:3000/');

const gaugeGas = document.querySelector(".gauge_gas");
const gaugeFire = document.querySelector(".gauge_fire");
const gaugeTemp = document.querySelector(".gauge_temp");
const gaugeGasText = document.querySelector(".gauge_gas_text");
const gaugeFireText = document.querySelector(".gauge_fire_text");
const gaugeTempText = document.querySelector(".gauge_temp_text");

function getDataFromDevice(deviceName){
    
    console.log('Listening data for device: ' + deviceName);
    
    socket.on("arrived", (msg)=>{
      let fire = msg.dados.payload_fields.payload_fire;
      let gas = msg.dados.payload_fields.payload_gas;
      let temp = msg.dados.payload_fields.payload_temp;
      
      gaugeGasText.innerHTML = "(" + gas + ")";
      gaugeFireText.innerHTML = "(" + fire + ")";
      gaugeTempText.innerHTML = "(" + temp + ")";
      
      setGaugeValue(gaugeGas, convertToMinimumDecimal(gas));
      setGaugeValue(gaugeFire, convertToMinimumDecimal(fire));
      setGaugeValue(gaugeTemp, convertToMinimumDecimal(temp));
    });
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
  if(gauge.classList.value === 'gauge gauge_temp'){
    gauge.querySelector(".gauge__fill").style.background = `#6a13dd`;
  }

  gauge.querySelector(".gauge__cover").textContent = `${Math.round(value * 100)}%`;
}

function convertToMinimumDecimal(value){
  if(isNaN(value)) return 0;
  const val = parseInt(value, 10);

  if(val >= 1000){
    return val / 10000;
  }
  else if(val >= 100){
    return val / 1000;
  }
  else if(val >= 10){
    return val / 100;
  }
  else{
   return val / 10; 
  }
}

setGaugeValue(gaugeGas, convertToMinimumDecimal(0));
setGaugeValue(gaugeFire, convertToMinimumDecimal(0));
setGaugeValue(gaugeTemp, convertToMinimumDecimal(0));