const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");

function gettime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
     minutes < 10 ? `0${minutes}` : minutes}:${
     seconds < 10 ? `0${seconds}` : seconds}`;
  }
  
  function init(){
     gettime();
     setInterval(gettime, 1000);
  }

  init();
