class ZeroRTCEngine {

  public static SIGNAL_TYPE_JOIN = "join"; // 主动加入
  public static SIGNAL_TYPE_RESPONSE_JOIN = "response-join"; // 告知加入者对方信息
  public static SIGNAL_TYPE_LEAVE = "leave"; // 主动离开
  public static SIGNAL_TYPE_NEW_PEER = "new-peer";  // 通知有人加入
  public static SIGNAL_TYPE_PEER_LEAVE = "peer-leave"; // 通知有人离开
  public static SIGNAL_TYPE_OFFER= "offer"; // 发送 offer 给 对端 peer
  public static SIGNAL_TYPE_ANSWER= "answer"; // 发送 answer 给 对端 peer
  public static SIGNAL_TYPE_CANDIDATE= "candidate"; // 发送 candidate 给 对端 peer

  private webSocketAddress: string | URL;
  public signaling: any;

  constructor(webSocketAddress: string | URL) {
    this.webSocketAddress = webSocketAddress;
    this.signaling = null;
  }

  public createWebSocket() {
    const wsServer = new WebSocket(this.webSocketAddress);
    this.signaling = wsServer;
    this.signaling.onopen = (event: Event) => {
      this.onOpen(event)
    };
    this.signaling.onmessage = (event: Event) => {
      this.onMessage(event)
    };
    this.signaling.onerror = (event: Event) => {
      this.onError(event)
    };
    this.signaling.onclose = (event: Event) => {
      this.onClose(event)
    };
  }

  public sendMessage(message: string) {
    this.signaling.send(message);
  }

  public onOpen(event: Event) {
    console.log('onOpen', event);
  }

  public onMessage(event: Event) {
    console.log('onMessage', event);
  }

  public onError(event: Event) {
    console.log('onError');
  }

  public onClose(event: Event) {
    console.log('onClose');
  }
}


export default ZeroRTCEngine;
