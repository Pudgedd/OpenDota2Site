const app = getApp();
const {
  formatTime
} = require('../../utils/util.js')
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      badge: 120,
      name: 'VR'
    }, {
      icon: 'recordfill',
      color: 'orange',
      badge: 1,
      name: '录像'
    }, {
      icon: 'picfill',
      color: 'yellow',
      badge: 0,
      name: '图像'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 22,
      name: '通知'
    }, {
      icon: 'upstagefill',
      color: 'cyan',
      badge: 0,
      name: '排行榜'
    }, {
      icon: 'clothesfill',
      color: 'blue',
      badge: 0,
      name: '皮肤'
    }, {
      icon: 'discoverfill',
      color: 'purple',
      badge: 0,
      name: '发现'
    }, {
      icon: 'questionfill',
      color: 'mauve',
      badge: 0,
      name: '帮助'
    }, {
      icon: 'commandfill',
      color: 'purple',
      badge: 0,
      name: '问答'
    }, {
      icon: 'brandfill',
      color: 'mauve',
      badge: 0,
      name: '版权'
    }],
    gridCol:3,
    skin: false,
    leagueList: []
  },
  getLeagues(e) {
    //请求数据
    app.openApiProxy({
      aName: "leagueList",
      args: {
      }
    }).then(res => {
      console.log(res)
    })
  },

  onLoad() {
    //先去看看有没有英雄数据
    if (!wx.getStorageSync('leagueListCache')) {
      //请求接口放到storage里
      app.openApiProxy({
        aName: "leagueList",
        args: {
          pageNum:1,
          pageSize:30
        }
      }).then(res => {
        res.data.forEach(item => {
          //格式化时间
          let startTime = new Date(item.start_time*1000)
          let endTime = new Date(item.end_time*1000)
          item.start_time = formatTime(startTime).slice(0, -9)
          item.end_time = formatTime(endTime).slice(0, -9)
        })
        console.log(res)
        wx.setStorage({
          key: 'leagueListCache',
          data: res.data,
        })
        this.setData({
          leagueList: res.data
        })
      })
    } else {
      //取出来
      //拿ID作为KEY保存
      //存到本地data中
      let leagueListCache = wx.getStorageSync('leagueListCache')
      console.log(leagueListCache)
      this.setData({
        leagueList: leagueListCache
      })
    }
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  gridchange: function (e) {
    this.setData({
      gridCol: e.detail.value
    });
  },
  gridswitch: function (e) {
    this.setData({
      gridBorder: e.detail.value
    });
  },
  menuBorder: function (e) {
    this.setData({
      menuBorder: e.detail.value
    });
  },
  menuArrow: function (e) {
    this.setData({
      menuArrow: e.detail.value
    });
  },
  menuCard: function (e) {
    this.setData({
      menuCard: e.detail.value
    });
  },
  switchSex: function (e) {
    this.setData({
      skin: e.detail.value
    });
  },

  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },

  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },

  onShareAppMessage() {
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection =='left'){
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  },
})