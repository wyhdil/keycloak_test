<template>
  <el-container>
    <el-header class="head">
      <div class="headLogo Item" @click="backHome">
        <img src="../../static/img/headnav.png" />
      </div>
      <div class="Option Item">
  
        <div class="nabar">
          <el-popover placement="top-start" trigger="hover" width="900">
            <div class="boxSelect">

              <div class="selectItem iClick bg1" v-for="(item,index) in consultArea" :key="index" @click="jumpToTearcher(item.id)">
                <svg class="icon myIcon" aria-hidden="true">
                  <use :xlink:href="iconFont[index]"></use>
                </svg>
                <span class="myselect">{{item.areaName}}</span>
              </div>
            </div>
            <span class="barItemfirst" slot="reference"
              >咨询
              <svg class="icon newstyle" aria-hidden="true">
                <use xlink:href="#icon-xiajiantou"></use>
              </svg>
            </span>
          </el-popover>
          <!-- <span class="barItem" @click="handleClick('0')">咨询</span> -->
          <span class="barItem iClick" @click="handleClick('1')" tabindex="1"
            >名师</span
          >
          <span class="barItem iClick" @click="handleClick('2')" tabindex="2"
            >学习导图</span
          >
          <span class="barItem iClick" @click="handleClick('4')" tabindex="4"
            >相关资讯</span
          >
          <span class="barItem iClick" @click="handleClick('3')" tabindex="3"
            >周边/资源</span
          >
        </div>
      </div>
      <div class="aboutBox Item">
        <div class="search">
          <div class="searchBox">
            <svg class="icon searchIcon" aria-hidden="true">
              <use xlink:href="#icon-sousuo1"></use>
            </svg>
            <input
              v-model="keywords"
              type="search"
              placeholder="what do u want to learn"
              @keyup.enter="getInput"
            />
          </div>
        </div>

        <div class="MsgIcon">
          <el-badge :value="$store.state.newMessage" v-if="$store.state.newMessage"  class="item iClick">
            <svg class="icon newStyle" aria-hidden="true" @click="checkNews">
              <use xlink:href="#icon-xiaoxizhongxin"></use>
            </svg>
          </el-badge>
          <el-badge v-else  class="item iClick">
            <svg class="icon newStyle" aria-hidden="true" @click="checkNews">
              <use xlink:href="#icon-xiaoxizhongxin"></use>
            </svg>
          </el-badge>
          <svg class="icon" aria-hidden="true" @click="jumpToDiscuss">
            <use xlink:href="#icon-discuss"></use>
          </svg>
        </div>
        <div class="avator">
          <div class="mytouxiang">
            <img v-if="avatarImg" :src="'/api/file/download/' +avatarImg" />
            <img v-else :src="oldImg"/>
          </div>
          <div class="username">{{ username }}</div>
          <div class="select">
            <el-dropdown placement="top-start">
              <span class="el-dropdown-link iClick">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <div @click="jumpToMe">
                    <!-- <i class="iconfont icon-gerenzhongxin1"></i> -->
                    <svg class="icon smallIcon" aria-hidden="true">
                      <use xlink:href="#icon-lianxiren"></use>
                    </svg>
                    <span class="svgSpan">个人中心</span>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div @click="logOut">
                    <!-- <i class="iconfont icon-shoucang"></i> -->
                    <svg class="icon smallIcon" aria-hidden="true">
                      <use xlink:href="#icon-tuichubianji"></use>
                    </svg>
                    <span class="svgSpan">退出</span>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </el-header>
    <el-main class="main">
      <router-view />
    </el-main>
    <el-footer>
      <div class="auto-contain">
        <div class="first">
          <div class="left">
            <div class="headLogo Item">
              <img src="../../static/img/headnav.png" />
            </div>
            <div class="email-tel">
              <div>Tel:0845 371 02 02</div>
              <div>Email:[email protected]</div>
            </div>
            <div>
              <span class="textFooter"
                >Get started now and take advantage of our 30 day free trail
                today</span
              >
            </div>
          </div>
          <div class="right">
            <div class="li-first inlinBlock">
              <h3>About</h3>
              <ul>
                <li>About</li>
                <li>News</li>
                <li>Impact</li>
                <li>Our team</li>
                <li>Our interns</li>
              </ul>
            </div>
            <div class="li-second inlinBlock">
              <h3>Need Some Help</h3>
              <ul>
                <li>FAQs</li>
                <li>Child safety</li>
                <li>Help Centre</li>
                <li>Contact</li>
                <li>Academy</li>
              </ul>
            </div>
            <div class="li-third inlinBlock">
              <h3>Courses</h3>
              <ul>
                <li>Khan Kid app</li>
                <li>Science & engineering</li>
                <li>Computing</li>
                <li>Arts & humanities</li>
                <li>Economic & finance</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="second"></div>
        <div class="third"></div>
      </div>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      iconFont:{
        "0":'#icon-tongzhiguangbo',
        "1":'#icon-zihangche',
        "2":'#icon-shangsheng',
        "3":'#icon-wendangguanli-xiangmuleiwendang',
        "4":'#icon-chuguoxiangmu',
        "5":'#icon-jiaoyupeixun'
      },
      newMessage: 0,
      consultArea: [],
      search: "",
      num: 0,
      // ishome: true, //判断当前是不是首页
      intervalId: null, //定时器
      avatarImg: "", //头像
      username: "",

      keywords: "", //输入框的内容

      oldImg:require('../../static/img/avator.jpg')

      // // webSocket
      // wsUrl: "", // ws地址
      // websock: null, // ws实例
    };
  },
  mounted() {
    // this.initWebSocket();
  },
  created() {
      // //ws地址赋值
      // this.wsUrl =
      // "ws://duckflew.cn:7010/ws?satoken=" +
      // window.localStorage.getItem("token");

    // this.getSysNews();
    this.autoGetSysNews();
    this.showType();
    this.getMyAvator();

    let myId = window.localStorage.getItem("myId");
    //vuex里面的
    this.$store.dispatch('getMyInfo',myId)

  },
  destroyed() {
    clearInterval(this.intervalId); // 清除计时器
    this.intervalId = null; // 设置为null

    // 离开路由之后断开websocket连接
    // this.websock.close();
  },
  // mounted() {
  //   this.getSysNews();
  //   setInterval(this.getSysNews, 15000);
  // },

  //加一个监听器，其他页面不是首页就再加一个首页栏
  // watch: {
  //   $route: function () {
  //     console.log("watch里面home", this.$route.path);
  //     if (this.$route.path === "/welcome") {
  //       this.ishome = true;
  //     } else {
  //       this.ishome = false;
  //     }
  //   },
  // },
  methods: {
    backHome(){
      this.$router.push('/home')
    },
    // webSocket
    // 初始化weosocket
    initWebSocket() {
      if (typeof WebSocket === "undefined")
        return console.log("您的浏览器不支持websocket");
      this.websock = new WebSocket(this.wsUrl);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() {
      // 连接建立之后执行send方法发送数据
      let actions = "123";
      this.websocketsend(actions);
    },
    websocketonerror() {
      // 连接建立失败重连
      this.initWebSocket();
    },
    websocketonmessage(e) {
      // 数据接收
      console.log("===");
      const redata = e.data.split("，");
      console.log("接收的数据：");
      console.log(redata);
    },
    websocketsend(Data) {
      // 数据发送
      this.websock.send(Data);
    },
    websocketclose(e) {
      // 关闭
      console.log("断开连接", e);
    },

    getInput() {
      //获取输入框的内容
      console.log("----");
      console.log(this.keywords);
      this.$router.push({
        path: "/discuss",
        query: { keywords: this.keywords },
      });
      // this.keywords = "";
    },
    getMyAvator() {
      let myId = window.localStorage.getItem("myId");
      this.$http({
        methods: "GET",
        url: "/user/profile/" + myId,
      }).then((res) => {
        console.log("获取自己的个人信息");
        console.log(res);
        if (res.data.code == 200) {
          this.avatarImg = res.data.data.userInfo.basicInfo.avatar;
            console.log('查看头像');
            console.log(this.avatarImg);
          this.username = res.data.data.userInfo.basicInfo.username;
        }
      });
    },
    autoGetSysNews() {
      // this.initWebSocket() //websocket的连接
      this.getSysNews();
      // 计时器正在进行中，退出函数
      if (this.intervalId != null) {
        return;
      }
      // 计时器为空，操作  注意，这里调用函数的时候不要加小括号
      this.intervalId = setInterval(this.getSysNews, 10000);
      // this.intervalId = setInterval(this.initWebSocket, 10000);

    },
    jumpToDiscuss() {
      this.$router.push("/discuss");
    },
    jumpToTearcher(index) {
      // index = index + 1;
      this.$router.push({
        path: "/tearcherInfo",
        query: {
          select: index,
        },
      });
    },
    showType() {
      this.$http({
        methods: "GET",
        url: "/consult_area/top",
      }).then((res) => {
        if (res.status) {
          if (res.data.code == 200) {
            this.consultArea = res.data.data;
            console.log('顶层');
            console.log(this.consultArea);
          } else {
            this.$message.error(res.data.msg);
          }
        }
      });
    },
    checkNews() {
      console.log("cccc");
      this.$router.push("/message");
    },
    getSysNews() {
      // this.$http({
      //   methods: "GET",
      //   url: "/msg/not_read_count",
      // }).then((res) => {
      //   console.log(res);
      //   if (res.data.code != 200) {
      //     this.$message.error(res.data.msg);
      //   } else {
      //     this.newMessage = res.data.data.total;
      //     //将这些未读消息赋值
      //     this.$store.commit("setUnReadMsg", res.data.data);
      //   }
      // });
      //直接调用store的方法
      this.$store.dispatch('getSystemNews')
    },
    handleClick(index) {
      console.log("点击：" + index);
      this.num = index;
      // 点击对应的功能之后跳转页面
      if (index == 0) {
        this.$router.push("/home");
      } else if (index == 1) {
        //这个页面是名师教授对应跳转
        console.log("跳转到老师");
        this.$router.push("/tearcherInfo");
      } else if (index == 2) {
        this.$router.push("/studyRoute");
      } else if (index == 3) {
        this.$router.push("/others");
      }else if(index==4){
        this.$router.push("/news");

      }
    },
    jumpToMe() {
      let id = window.localStorage.getItem("myId");
      console.log("我的名字");
      this.$router.push({
        path: "/user/" + id,
      });
    },
    logOut() {
      //退出登录，
      window.localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.head {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #fbfbfb;
}

.el-header {
  height: 100px !important;
  padding: 0 5px 0 40px;
}

.navBar {
  display: flex;
  margin-left: 30px;
}

.barItemfirst {
  display: inline-block;
  width: 16%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  position: relative;
  margin-left: 20px;
}

.barItem {
  display: inline-block;
  width: 18%;
  height: 100px;
  line-height: 100px;
  text-align: center;
}

.barItem:hover {
  background-color: #44b97e;
  color: white;
}
.barItem:focus{
  background-color: #44b97e;
  color: white;
}
.headLogo {
  height: 100px;
  width: 250px;
}

.headLogo img {
  height: 100%;
  width: 100%;
}

.Option {
  width: 100%;
  font-size: 22px;
  /* font-weight: bold; */
}

.optionItem {
  display: inline-block;
  height: 60px;
  width: 180px;
  padding: 40px 30px 0;
  text-align: center;
}

.aboutBox {
  height: 100%;
  width: 1100px;
  display: flex;
}
.search {
  flex: 0 0 300px;
}
.MsgIcon {
  flex: 0 0 120px;
  padding: 30px 0px;
  color: #44b97e;
}
.newStyle {
  margin-top: -10px;
  font-size: 20px;
}
.newstyle {
  display: inline-block;
  width: 30px !important;
  margin-top: 10px;
  top: 10px;
  position: relative;
  left: -7px;
  color: #44b97e !important;
}
.item {
  margin-top: -18px;

  margin-right: 30px;
}
.Icon {
  color: #44b97e;
  width: 200px;
  padding: 40px 10px;
}
.inputBox {
  width: 100%;
  height: 60px;
  border: 2px solid #44b97e;
  border-radius: 5px;
  margin-top: 20px;
}
.main {
  /* background: #f5f5f5; */
  /* height: 1000px; */
  height: auto;
  overflow: hidden;
}

.el-main {
  padding: 0;
}

.iconItem {
  color: #44b97e;
  margin-left: 15px;
  font-size: 35px !important;
}

.avator {
  flex: 1;
  position: relative;
}
.mystyle {
  color: #44b97f;
  margin: 6px 5px 0;
}
.textStyle {
  display: inline-block;
  color: #818181;
  width: 100%;
  height: 100%;
  margin-top: -60px;
}
.mytouxiang {
  padding: 20px 4px 0 4px;
  height: 50px;
  width: 50px;
}

i {
  font-size: 25px;
}

.mytouxiang img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: inline-block;
}
.username {
  position: absolute;
  display: inline-block;
  left: 62px;
  top: 40px;
  width: 80px;
  color: #44b97e;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.select {
  position: absolute;

  display: inline-block;
  right: 8px;
  top: 54px;
  margin-top: -14px;
  margin-left: 16px;
}
</style>
<style scoped>
.el-icon-s-check {
  font-size: 30px !important;
}

.boxSelect {
  display: inline-block;
}

.selectItem {
  width: auto;
  padding: 13px 30px;
  /* height: 45px; */
  margin: 0 10px;
  text-align: center;
  line-height: 45px;
  border-radius: 5px;
  font-weight: 500 !important;
  font-size: 18px;
  color: black;
  margin-bottom: 20px;
  display: inline-block;
}
.bg1 {
  background-color: rgb(251, 239, 247);
}
.bg2 {
  background: rgb(249, 239, 225);
}
.bg3 {
  background: rgb(227, 245, 255);
}
.bg4 {
  background: rgb(253, 241, 241);
}
.bg5 {
  background: rgb(235, 241, 237);
}
.bg6 {
  background: rgb(241, 243, 249);
}
.myselect {
  font-size: 26px;
  position: relative;
  padding: 7px 20px;
  border-left: 1px solid rgb(190, 187, 187);
}
.myIcon {
  transform: translate(-10px, 5px);
}
.selectItem:hover {
  color: green;
  background: rgb(128, 164, 128, 0.4);
}
.searchInput {
  line-height: 100px;
  margin-right: 20px;
}
.svgSpan {
  line-height: 2em;
  margin-bottom: 4px;
  padding-bottom: 4px;
  /* font-family: "STCaiyun"; */
  font-size: 18px;
}
.icon {
  padding-top: 5px;
}

.el-footer {
  height: 100% !important;
  font-size: 20px;
  background: #f8fbff;
  line-height: 45px;
  color: #1c3162;
}
.auto-contain {
  position: static;
  padding: 40px 40px 20px;
  margin: 0 auto;
}
.inlinBlock {
  display: inline-block;
}
.first{
  display: flex;
}
.first .left {
  width: 40%;
}
.first .right {
  flex: 1;
}
.textFooter {
  font-size: 25px;
}
.li-first {
  width: 30%;
}
.li-second {
  width: 32%;
}
.li-third {
  width: 30%;
}
ul {
  padding-left: 0 !important;
}
.search {
  display: flex;
  align-items: center;
}
.searchIcon {
  /* transform: translate(20px -10px); */
  position: absolute;
  left: 14px;
  top: 14px;
  color: #44b97e;
  width: 24px;
  height: 24px;
}
.searchBox {
  position: relative;
}
.searchBox input {
  width: 280px;
  height: 60px;
  border-radius: 8px;
  padding: 0px 20px 0px 50px;
  border: 1px solid #44b97e;
  font-size: 18px;
}
.searchBox input:focus {
  outline: 1px solid #44b97e;
}
.smallIcon {
  position: relative;
  transform: translate(-4px, 6px);
  color: rgba(179, 157, 13, 0.6);
}
</style>
