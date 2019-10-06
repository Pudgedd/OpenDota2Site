const app = getApp()
const {
  formatTime
} = require('../../utils/util.js')

Page({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
        title: '英雄/物品',
        img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
        url: '/pages/hero/hero'
    },
      {
        title: '比赛/用户',
        img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
        url: '/pages/search/search'
      },
      {
        title: '饰品',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
        url: '/pages/store/store'
      },
      {
        title: '赛事',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
        url: '/pages/league/league'
      }
    ]
  },

  onLoad() {
    
  },
  navigate(e) {
    let toUrl = e.currentTarget.dataset.url
    wx.navigateTo({
      url: toUrl
    })
  },
  // ListTouch计算滚动

  onShareAppMessage() {
    return {
      title: 'Dota2赛高:-)',
      imageUrl: '/images/share.jpg',
      path: '/pages/home/home'
    }
  },
})