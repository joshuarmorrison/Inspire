

function _clock() {
    var date = new Date(); 
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM"; 
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); 
    hour = updateClock(hour);
    min = updateClock(min);
    sec = updateClock(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; 
      var t = setTimeout(_clock, 1000); 
  }
  
  function updateClock(k) { 
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }

  export class ClockController{
constructor(){
    _clock();
}
}
  
  