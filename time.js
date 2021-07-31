const time = document.getElementById('time')

function getClock(){
    const date= new Date();
    const hours = String(date.getHours()).padStart (2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");
  
    time.textContent = (`${hours}:${minutes}:${sec}`);
  }

setInterval(getClock,1000)