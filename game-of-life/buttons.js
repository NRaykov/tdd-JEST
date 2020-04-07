window.addEventListener('load', function () {
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");

  startButton.onclick = event => {
    startButton.setAttribute("disabled", 'true');
    stopButton.removeAttribute("disabled");
  };

  stopButton.onclick = event => {
    startButton.removeAttribute("disabled");
    stopButton.setAttribute("disabled", 'true');
  };
});
