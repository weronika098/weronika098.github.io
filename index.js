function showTime() {
    let now = new Date();
    let actualTime = formatTime(now.getHours(), now.getMinutes(), now.getSeconds());

    let timer = document.getElementById('zegar');
    timer.innerHTML = actualTime;
    
    setInterval(showTime, 1000);

    function formatTime(hours, minutes, seconds) {
      let time = "";
      if (hours < 10) hours = '0' + hours;
      if (minutes < 10) minutes = '0' + minutes;
      if (seconds < 10) seconds = '0' + seconds;
       
      return hours + ":" + minutes + ":" + seconds;
    }
  }