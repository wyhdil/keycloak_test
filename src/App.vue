<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  created() {
    console.log("离开标记", this.socketLeaveFlag);
  },
  mounted() {
    // websocket启动
    // this.createWebSocket();
  },
  destroyed() {
    // 离开标记

  },
  methods: {
 
  },
};
</script>


<!-- <script>
export default {
  name: "App",
  data() {
    return {
      wsUrl: "", // ws地址
      websock: null, // ws实例
    };
  },

  created() {
    console.log("app.vue");
    console.log(window.localStorage.getItem("token"));
    this.wsUrl =
      "ws://duckflew.cn:7010/ws?satoken=" +
      window.localStorage.getItem("token");
  },
  mounted() {
    this.initWebSocket();
  },
  // destroyed() {
  //   // 离开路由之后断开websocket连接
  //   this.websock.close();
  // },
  methods: {
      // 初始化weosocket
      initWebSocket() {
        if (typeof WebSocket === 'undefined')
          return console.log('您的浏览器不支持websocket')
        this.websock = new WebSocket(this.wsUrl)
        this.websock.onmessage = this.websocketonmessage
        this.websock.onopen = this.websocketonopen
        this.websock.onerror = this.websocketonerror
        this.websock.onclose = this.websocketclose
      },
      websocketonopen() {
        // 连接建立之后执行send方法发送数据
        let actions = '123'
        this.websocketsend(actions)
      },
      websocketonerror() {
        // 连接建立失败重连
        this.initWebSocket()
      },
      websocketonmessage(e) {
        // 数据接收
        console.log('===');
        const redata = e.data.split('，')
        console.log('接收的数据：')
        console.log(redata);
      },
      websocketsend(Data) {
        // 数据发送
        this.websock.send(Data)
      },
      websocketclose(e) {
        // 关闭
        console.log('断开连接', e)
      },
    },
};
</script> -->

<style scoped>
</style>
