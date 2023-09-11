<template>
  <div class="bg">
    <div class="content">
      <div class="newC">
        <div class="floatImg1"></div>
        <div class="floatImg2"></div>
        <div class="floatImg3"></div>
        <div class="floatImg4"></div>
        <div class="floatImg5">
          <p class="floatText">
            智慧学习 <br />
            推进全民教育
          </p>
        </div>
        <div class="floatImg6"></div>
        <div class="floatImg7"></div>
        <div class="floatImg8"></div>

        <div class="left">
          <img src="../../static/img/homebg.png" />
        </div>
        <div class="right">
          <div class="firstText">教 授 面 对 面</div>
          <div class="secondText">
            <h1>
              为全社会提供的 <br />

              公益性线上教育 <br />
              咨询服务
            </h1>
          </div>
          <span class="thirdBtn">
            <span class="text iClick" @click="startTeach">开始咨询</span>
          </span>
        </div>
      </div>

      <div class="newD">
        <div class="newbg"></div>

        <div class="head">
          <div class="title">评价</div>
          <h2 class="myh2">用户反馈</h2>
          <div class="text2">
            每次咨询过后都有用户对本次咨询的评价,
            <br />
            这是最真实的反馈。
          </div>
        </div>
        <div class="box">
          <div class="boxContent">
            <div class="box1">
              <div class="comment">
                We turn your experts into thought leaders by getting their
                voices heard in the market and by building credibility and brand
                advocates amongst industry influencers from the media, analyst
                community
              </div>
              <div class="foot">
                <div class="avatar2 myinline">
                  <img src="../../static/img/author-1.png" />
                </div>
                <div class="user myinline">
                  <div class="name">用户1374383993</div>
                  <div class="select">在线咨询</div>
                </div>
                <div class="quote myinline">
                  <svg class="icon" aria-hidden="true" @click="checkNews">
                    <use xlink:href="#icon-16gl-quoteRight"></use>
                  </svg>
                </div>
              </div>
              <div class="img2"></div>
            </div>
            <div class="box2">
              <div class="comment">
                老师很专业，并且对澳国立非常了解，让我对澳国立的学习、课程、食宿等方面有了全方位的了解。
              </div>
              <div class="foot">
                <div class="avatar2 myinline">
                  <img src="../../static/img/author-1.png" />
                </div>
                <div class="user myinline">
                  <div class="name">用户1374383993</div>
                  <div class="select">出国留学</div>
                </div>
                <div class="quote myinline">
                  <svg class="icon" aria-hidden="true" @click="checkNews">
                    <use xlink:href="#icon-16gl-quoteRight"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="newE">
        <div class="float1"></div>
        <div class="icon3"></div>
        <!-- <div class="floatImg4"></div> -->
        <div class="newFloat4"></div>
        <div class="newFloat5"></div>
        <div class="head">
          <div class="title">问题疑惑</div>
          <h2 class="myh2">最近的咨询</h2>
          <div class="text2">
            请放心提出你的疑问:
            <br />
            这里有专业的人士为您提供专业、细致的解答
          </div>
        </div>
        <div class="imgCon">
          <div class="Imgleft myinline">
            <div class="ComImg">
              <div class="mask"></div>

              <img src="../../static/img/news-1.png" />
            </div>
            <div class="imgConText">
              <!-- <div class="border-layer"></div> -->
              <div class="textCOntent">
                <div class="cardTitle">
                <span class="area">大学</span>
                <span>Sep 26,2020</span>
              </div>
              <div class="cardBody">
                <h2>课程咨询
                   <br>
                    工学-计算机科学与技术
                </h2>
              </div>
              <div class="cardFoot">More >></div>
              </div>
             
            </div>
          </div>
          <div class="Imgright myinline">
            <div class="ScolImg myinline">
              <div class="mask"></div>

              <img src="../../static/img/news-2.png" />
            </div>
            <div class="imgConText">
              <div class="cardTitle">
                <span class="area">留学</span>
                <span>Sep 26,2020</span>
              </div>
              <div class="cardBody">
                <h2>澳大利亚-
                    澳大利亚国立大学
                </h2>
              </div>
              <div class="cardFoot">More >></div>
            </div>

          </div>
        </div>
      </div>
      <div class="newF">
        <div class="head">
          <h2 class="myh2">Key supporters</h2>
          <div class="text2">
            These leading universities are currently offering online degree
            <br />
            courses on FutureLearn:
          </div>
        </div>
        <div class="endContent">
          <div class="boxend">
            <div class="div1">
              <img src="../../static/img/1.png" />
            </div>
            <div class="2">
              <img src="../../static/img/2.png" />
            </div>
            <div class="3">
              <img src="../../static/img/3.png" />
            </div>
            <div class="4">
              <img src="../../static/img/4.png" />
            </div>
            <div class="5">
              <img src="../../static/img/5.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0, //当前所在图片下标
      timer: null, //定时轮询
      imgArr: [
        { id: 0, url: "../../static/homeImg/banner01.jpg" },
        {
          id: 1,
          url: "../../static/homeImg/banner02.jpg",
        },
        {
          id: 2,
          url: "../../static/homeImg/banner03.jpg",
        },
        {
          id: 3,
          url: "../../static/homeImg/banner04.jpg",
        },
      ],
    };
  },
  methods: {
    startTeach(){
      //跳转到教授页面
      // this.$router.push('/tearcherInfo')
      this.$router.push('/tearcherInfo')

    },
    //开启定时器
    startInterval() {
      // 事件里定时器应该先清除在设置，防止多次点击直接生成多个定时器
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.currentIndex++;
        if (this.currentIndex > this.imgArr.length - 1) {
          this.currentIndex = 0;
        }
      }, 3000);
    },
    // 点击左右箭头
    clickIcon(val) {
      if (val === "down") {
        this.currentIndex++;
        if (this.currentIndex === this.imgArr.length) {
          this.currentIndex = 0;
        }
      } else {
        /* 第一种写法
					this.currentIndex--;
					if(this.currentIndex < 0){
						this.currentIndex = this.imgArr.length-1;
					} */
        // 第二种写法
        if (this.currentIndex === 0) {
          this.currentIndex = this.imgArr.length;
        }
        this.currentIndex--;
      }
    },
    // 点击控制圆点
    changeImg(index) {
      this.currentIndex = index;
    },
    //鼠标移入移出控制
    changeInterval(val) {
      if (val) {
        clearInterval(this.timer);
      } else {
        this.startInterval();
      }
    },
  },
  //进入页面后启动定时轮询
  mounted() {
    this.startInterval();
  },
};
</script>
<style scoped>
.bg {
  width: 100%;
  height: 100%;
  padding: 60px 0px;
  box-sizing: border-box;
}
.content {
  background: white;
}
.newC {
  display: flex;
  position: relative;
}
.newD {
  width: 100%;
  position: relative;
  height: 700px;
  margin-top: 70px;
}
.newE {
  width: 100%;
  position: relative;
  height: 1000px;
  margin-top: 100px;
}
.float1 {
  background: url(../../static/img/pattern-11.png);
  left: 0px;
  top: 380px;
  width: 100%;
  height: 853px;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
}
.imgCon {
  padding: 30px 70px;
  position: relative;
  margin-top: 40px;
}
.Imgleft {
  width: 50%;
  height: 650px;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 555px;
  height: 650px;
  background: rgba(95, 230, 240, 0.6);
  display: none;
  z-index: 1;
}
.mask:hover + img {
  transform: scale(1.1);
  opacity: 0.5;
}
.ComImg:hover .mask {
  display: block;
}
.ComImg {
  overflow: hidden !important;
  position: relative;

  width: 555px;
  height: 650px;
}
.ComImg img {
  transition: all 0.4s;
  width: 100%;
  height: 100%;
}
.ScolImg img {
  transition: all 0.4s;
  width: 100%;
  height: 100%;
}
.ScolImg:hover .mask {
  display: block;
}
.ScolImg {
  width: 555px;
  height: 650px;
  overflow: hidden !important;
  position: relative;
}
.Imgright{
  width: 48%;
  height: 650px;
}
.area{
  display: inline-block;
  padding: 5px 12px;
  border-radius: 23px;
  background: #43b97e;
  color: white;
  margin-right: 16px;
}
.cardBody{
  height: 80px;
}
.textCOntent{
  position: relative;
}
.border-layer{
  position: absolute;
  left: -12px;
  top: -30px;
  z-index: -100;
  width: 30px;
  bottom: -10px;
  border:6px solid #43b97e;
  transform: skewY(20deg);
}
.ComImg:hover .border-layer{
  transform: skewY(-20deg);

}
.imgConText {
  z-index: 1;
  position: relative;
  padding: 40px 30px;
  width: 360px;
  /* height: 300px; */
  background: white;
  margin-left: 260px;
  margin-top: -150px;
  transform: skewY(2deg);
}
.cardBody{
  border-bottom: 1px solid #f2f2f2;
}
.cardFoot{
  margin-top: 22px;
  font-family: 'Noto Sans TC', sans-serif;
}
.newF {
  width: 100%;
  position: relative;
  height: 500px;
  margin-top: 200px;
}
.newbg {
  background-image: url(../../static/img/pattern-9.png);
  position: absolute;
  top: 0px;
  /* width: 467px; */
  left: 0;
  right: 0;
  height: 600px;
  background-position: center top;
  background-repeat: no-repeat;
}
.head {
  position: relative;
  text-align: center;
}
.title {
  color: #43b97e;
  font-size: 20px;
  margin-bottom: -17px;
}
.myh2 {
  font-size: 46px;
}
.text2 {
  font-size: 32px;
  line-height: 1.6em;
  margin-top: -17px;
}
.img2 {
  background-image: url(../../static/img/pattern-10.png);
  position: absolute;
  left: 30px;
  top: 100px;
  width: 467px;
  height: 327px;
  z-index: 2;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
.floatImg1 {
  background-image: url(../../static/img/pattern-1.png);
  position: absolute;
  left: -40px;
  top: -20px;
  width: 467px;
  height: 327px;
  z-index: 2;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 900ms ease;
  animation-name: icon1;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.floatImg2 {
  background: url(../../static/img/icon-1.png);
  background-repeat: no-repeat;
  position: absolute;
  left: 160px;
  top: 470px;
  width: 210px;
  height: 130px;
  z-index: 1;
  animation-name: icon2;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.floatImg3 {
  background: url(../../static/img/icon-2.png);
  background-repeat: no-repeat;
  position: absolute;
  left: 600px;
  top: 470px;
  width: 30px;
  height: 30px;
  background-size: cover;

  z-index: 1;
  animation-name: icon3;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.floatImg4 {
  background-image: url(../../static/img/pattern-3.png);
  position: absolute;
  left: 620px;
  top: 430px;
  width: 105px;
  height: 104px;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 900ms ease;
  animation-name: icon4;
  animation-duration: 24s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.floatText {
  position: relative;
  color: white;
  text-align: center;
  line-height: 1.7em;
  font-size: 36px;
  margin-top: 100px;
}
.floatImg5 {
  background-image: url(../../static/img/pattern-6.png);
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;

  left: 350px;
  top: 500px;
  width: 330px;
  height: 310px;
}
.floatImg6 {
  background-image: url(../../static/img/pattern-4.png);
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  right: 0px;
  top: -20px;
  width: 400px;
  height: 400px;
  transition: all 900ms ease;
  animation-name: icon1;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.floatImg7 {
  background: url(../../static/img/icon-2.png);
  background-repeat: no-repeat;
  position: absolute;
  background-size: cover;

  right: 450px;
  top: 140px;
  width: 30px;
  height: 30px;
  z-index: 1;
  animation-name: icon3;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.floatImg8 {
  background-image: url(../../static/img/pattern-5.png);
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  right: 0px;
  bottom: 0px;
  width: 900px;
  height: 170px;
  transition: all 900ms ease;
  animation-name: icon8;
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-position: center bottom;
}
@keyframes icon1 {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: translate(0px, 30px); /* 可配置跳动方向 */
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
@keyframes icon2 {
  0% {
    transform: translateX(-30px);
    opacity: 1;
  }
  50% {
    transform: translateX(0px);
    opacity: 0.8;
  }
  100% {
    transform: translateX(-30px);
    opacity: 1;
  }
}
@keyframes icon3 {
  0% {
    transform: translateY(-30px);
    opacity: 1;
  }
  50% {
    transform: translateY(0px);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-30px);
    opacity: 1;
  }
}
@keyframes icon4 {
  0% {
    transform: rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: rotate(180deg);
    opacity: 0.7;
  }
  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes icon8 {
  0% {
    transform: translateX(-100px);
    opacity: 1;
  }
  50% {
    transform: translateX(-10px);
    opacity: 0.8;
  }
  100% {
    transform: translateX(-100px);
    opacity: 1;
  }
}
.left {
  flex: 0 0 700px;
}
.left img {
  width: 100%;
}
.right {
  flex: 1;
  padding: 100px 100px 200px 100px;
}
.firstText {
  font-size: 20px;
  font-weight: 600;
}
.secondText {
  font-size: 45px;
  margin-bottom: 70px;
  letter-spacing: 5px;
}
.thirdBtn {
  border-radius: 3px;
  line-height: 36px;
  padding: 20px 56px;
  background: #43b97e;
  font-size: 16px;
  font-weight: 600;
  color: white;
  letter-spacing: 3px;
  text-transform: uppercase;
  position: relative;
}
.thirdBtn::before {
  position: absolute;
  content: "";
  left: 110%;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  background: #ffe00c;
  transition: all 0.4s;
  /* transform: skewX(-25deg); */
}
.thirdBtn:hover::before {
  opacity: 1;

  z-index: inherit;
  left: 0;
  transition: all 0.2s;
}
.text {
  position: relative;
}
.text::before {
  position: absolute;
  content: "";
  left: -30px;
  top: 10px;
  width: 21px;
  height: 4px;
  background: url(../../static/img/left-btn.png) no-repeat;
}
.text::after {
  position: absolute;
  content: "";
  right: -30px;
  top: 10px;
  width: 21px;
  height: 4px;
  background: url(../../static/img/left-btn.png) no-repeat;
}

/* 清除li前面的圆点 */
li {
  list-style-type: none;
}
.showImg {
  position: relative;
  width: 70%;
  height: 550px;
  margin: 20px auto;
  overflow: hidden;
}
/* 轮播图片 */
.showImg img {
  width: 100%;
  height: 100%;
}

/* 箭头图标 */
.iconDiv {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border: 1px solid #666;
  border-radius: 15px;
  background-color: rgba(125, 125, 125, 0.2);
  line-height: 30px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
}
.iconDiv:hover {
  background-color: white;
}
.icon-left {
  left: 10px;
}
.icon-right {
  right: 10px;
}

/* 控制圆点 */
.banner-circle {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
}
.banner-circle ul {
  margin: 0 50px;
  height: 100%;
  text-align: right;
}
.banner-circle ul li {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin: 0 5px;
  border-radius: 7px;
  background-color: rgba(125, 125, 125, 0.8);
  cursor: pointer;
}
.active {
  background-color: black !important;
}
.box {
  width: 100%;
  margin-top: 40px;
  height: auto;
}

.boxContent {
  padding: 20px 80px;
  font-family: "Noto Sans TC", sans-serif;
  font-size: 30px;
  display: flex;
}
.box1 {
  padding: 30px 40px;
  position: relative;
  flex: 0 0 660px;
  border-radius: 10px;
  height: auto;
  /* transform: skewY(2deg); */
  /* border:1px solid darkgrey; */

  box-shadow: darkgrey 0px 0px 30px 3px;
}
.box2 {
  margin-left: 30px;
  flex: 1;
  padding: 30px 40px;
  height: 230px !important;

  position: relative;
  border-radius: 10px;
  transform: skewY(2deg);
  box-shadow: darkgrey 0px 0px 30px 3px;
}
.avatar2 img {
  position: relative;
  height: 100px;
  width: 100px;
}
.myinline {
  display: inline-block;
}
.user {
  transform: translate(-5px, -40px);
}
.name {
  font-size: 20px;
  font-weight: 600;
}
.select {
  font-size: 16px;
  color: #43b97e;
  margin-top: 5px;
}
.quote {
  float: right;
  transform: translate(-5px, 40px);
}
.foot {
  margin-top: 20px;
}
.endContent {
  width: 100%;
  height: 300px;
}
.boxend {
  margin-top: 30px;
  width: auto;
  padding: 0 70px 0 100px;
  /* background: #000; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-rows: 100px 100px; */
}
.icon3 {
  background-image: url(../../static/img/icon-3.png);
  position: absolute;
  left: -120px;
  top: 630px;
  width: 205px;
  height: 204px;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 900ms ease;
  animation-name: icon1;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.newFloat4 {
  background-image: url(../../static/img/pattern-3.png);
  position: absolute;
  right: 120px;
  top: 330px;
  width: 65px;
  height: 64px;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 900ms ease;
  animation-name: icon4;
  animation-duration: 24s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.newFloat5 {
  background-image: url(../../static/img/pattern-3.png);
  position: absolute;
  right: -10px;
  bottom: -130px;
  width: 105px;
  height: 104px;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 900ms ease;
  animation-name: icon4;
  animation-duration: 24s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>