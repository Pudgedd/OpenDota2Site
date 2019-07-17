const app = getApp()
const {
  formatTime
} = require('../../utils/util.js')

Page({
  options: {
    addGlobalClass: true,
  },
  data: {
    heroList: [],
    skin: false
  },

  getHeroData() {
    let that = this;
    wx.request({
      url: 'https://api.opendota.com/api/heroStats',
      success: (result) => {
        if (result.statusCode === 200) {
          that.setData({
            heroList: result.data
          });
          wx.setStorage({
            key: 'pHeroStats',
            data: result.data,
          });
        }
      }
    });
  },
  showPlayers(e) {
    //请求数据
    app.openApiProxy({
      aName: "heroStats",
      args: {
      }
    }).then(res => {
      console.log(res)
    })
  },

  onLoad() {
    this.getHeroData();
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
  navigate(e) {
    let hero_index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: `/pages/heroStatus/heroStatus?hero_index=${hero_index}`
    })
  },
  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection == 'left') {
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