document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    updateDate();
    getLocation();
    
    // Update time every second
    setInterval(updateTime, 1000);
  });
  
  function updateTime() {
    const timeElement = document.getElementById('time');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    timeElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  }
  
  function updateDate() {
    const dateElement = document.getElementById('date');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = currentDate.toLocaleDateString('en-US', options);
  }
  
  function getLocation() {
    const locationElement = document.getElementById('location');
  
    // For simplicity, we're using a placeholder location
    const location = 'Your City, Country';
    locationElement.textContent = `Location: ${location}`;
  }
  
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  