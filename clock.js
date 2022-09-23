const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  //const realtimeSecond=
  //const realtimeMinute=

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
 

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
     

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
   

    document.getElementById("realTime").innerHTML= hour +":"+ mins + ":" + seconds;
    
  }

  setInterval(setDate, 1000);

  setDate();

  //set alarm
  function setAlarm(){
    var alarmHour= document.getElementById("alarm").Value;
    var alarmMinute= document.getElementById("alarm").Value;
    var alarmSeconds= document.getElementById("alarm").Value;
    var currentTime
    
  }
