

const app = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  let pixiApp = new PIXI.Application({ width, height });
  document.body.appendChild(pixiApp.view);


  let socket = new WebSocket("ws://localhost:8080");

  socket.onopen = function(e) {
    alert("[open] Connection established");
    socket.send("My name is John");
  };

  socket.onmessage = function(event) {
    console.log("Got some data: ", event.data)
  };

  socket.onclose = function(event) {
    if (event.wasClean) {
      alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      alert('[close] Connection died');
    }
  };

  socket.onerror = function(error) {
    alert(`[error] ${error.message}`);
  };
  
  const handleKeyDown = (e) => {
    if (e.code === 'Space') {
      const payload = "My name is John" 
      console.log("Sending payload to server. Payload: " + payload)
      socket.send(payload);
    }
  }

  window.onkeydown = handleKeyDown
}



export default app