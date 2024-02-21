
const createWSClient = (serverIP: string | URL) => {
  const wsClient = new WebSocket(serverIP);
  return wsClient;
}

export {
  createWSClient,
}
// wsClient.onopen = () => {
//   console.log("websocket open");
//   // wsClient.send("usr1")
// }

// wsClient.onclose = () => {
//   console.log("websocket close")
// }

// wsClient.onmessage = (e) => {
//   const msg = JSON.parse(e.data);
//   console.log("msg", msg);
// }
