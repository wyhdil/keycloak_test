import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        activeIndex: '/privateMsg',//菜单的默认激活栏,刷新时还是默认到这个了

        newMessage:0,
        sysMsg: 0, //系统消息
        privateMsg: 0, //私聊消息

        answerLikedMsg: 0, //回答被点赞
        myAnswer: 0, //收到回答
        questionInvite: 0, //收到问题邀请
        questionLikedMsg: 0, //问题被点赞

        questionBanMsg: 0, //问题被封
        AnswerBanMsg: 0, //回答被封

        receiveEvalueMsg: 0,

        questAuditMsg:0,//提问审核的总消息
        passQuest:0,
        faileQuest:0,

        totalMsg: 0, //互动消息 即为其分支消息的总和
        banTotMsg: 0, //封禁消息的总和

        myArrarLike: [],//这里存的就是个人信息里面的res.data.data.likeAreaNameList
        myInfo:[],//自己的个人信息

        info:[],//个人信息
        showInfo:false,
    },
    mutations: {
        changeActiveIndex(state, newIndex) {
            if (newIndex.includes('/privateMsg/')) {
                newIndex = '/privateMsg'
            } else if (newIndex == '/message') {
                newIndex = '/privateMsg'
            }
            state.activeIndex = newIndex
        },
        setUnReadMsg(state, data) {
            // console.log('+++++++++++store+++++++');
            // console.log(data);
            state.newMessage=data.total

            state.sysMsg = data.list[0].notReadCount
            state.privateMsg = data.list[1].notReadCount

            state.answerLikedMsg = data.list[2].notReadCount
            state.myAnswer = data.list[3].notReadCount
            state.questionInvite = data.list[4].notReadCount
            state.questionLikedMsg = data.list[5].notReadCount

            state.questionBanMsg = data.list[6].notReadCount
            state.AnswerBanMsg = data.list[7].notReadCount

            state.receiveEvalueMsg = data.list[10].notReadCount

            state.passQuest = data.list[8].notReadCount
            state.faileQuest = data.list[9].notReadCount

            state.totalMsg = state.answerLikedMsg + state.myAnswer + state.questionInvite + state.questionLikedMsg + state.receiveEvalueMsg

            state.banTotMsg = state.questionBanMsg + state.AnswerBanMsg

            state.questAuditMsg = state.passQuest + state.faileQuest

        },
      
        setMyLikearea(state, arrayLike) {
            state.myArrarLike = arrayLike
        },
        setInfo(state, info) {
            // console.log('这里是vuex的获取个人消息');
            // console.log(info);
            state.info=info
            state.showInfo=true
            // state.myAvatar = '/api/file/download/' + myInfo.avatar
            // console.log('查看头像');
            // console.log(info.userInfo.basicInfo.avatar);
        },
        setMyInfo(state, info) {
            // console.log('这里是vuex的获取个人消息');
            // console.log(info);
            state.myInfo=info
        }

    },
    actions: {
        getInfo(context, id) {
            axios.get("/user/profile/" + id).then(res => {
                if (res.data.code == 200) {
                    context.commit('setInfo', res.data.data)
                }
            })
          
        },
        //这里是获取自己的个人信息，用于在home头部和消息那里使用，上面那个用户个人主页
        getMyInfo(context, id) {
            axios.get("/user/profile/" + id).then(res => {
                if (res.data.code == 200) {
                    context.commit('setMyInfo', res.data.data)
                }
            })
          
        },
        getSystemNews(context) {
            axios.get("/msg/not_read_count").then((res) => {
            //   console.log(res);
              if (res.data.code != 200) {
                this.$message.error(res.data.msg);
              } else {
                // this.newMessage = res.data.data.total;
                //将这些未读消息赋值
                context.commit("setUnReadMsg", res.data.data);
              }
            });
          },
    }
})