// pages/Player/Player.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    hero: null,
    heroDetail: null,
    maxHeroDetail:null,
    heroRecentMatches: null,
    topPlayers: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let hero_id = options.hero_id
    this.setData({
      hero_id
    })
    let heroStatsArr = wx.getStorageSync('pHeroStats')
    this.setData({
      hero: heroStatsArr[hero_id]
    })
    app.openApiProxy({
      aName: "heroDetail",
      args: {
        name: heroStatsArr[hero_id].name.slice(14)
      }
    }).then(res => {
      console.log(res.data)
      this.setData({
        heroDetail: res.data
      })
    })
    
    app.openApiProxy({
      aName: "maxHeroDetail",
      args: {
        name: heroStatsArr[hero_id].name.slice(14)
      }
    }).then(res => {
      console.log(res.result)
      this.setData({
        maxHeroDetail: res.result
      })
    })

    this.callComponent()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id
    })
  },
  change(e) {
    this.setData({
      TabCur: e.detail.current
    })
    this.callComponent()
  },

  callComponent() {
    let cur = this.data.TabCur
    if (cur == 0) {
      if (!this.data.heroRecentMatches) {
        this.getData('heroRecentMatches')
      }
    } else if (cur == 1) {
      if (!this.data.topPlayers) {
        this.getData('topPlayers')
      }
    } else if (cur == 2) {
      
    } else if (cur == 3) {
      
    }
  },
  getData(cmd) {
    let hero_id = this.data.hero_id
    if (cmd == "heroRecentMatches") {
      app.openApiProxy({
        aName: "heroRecentMatches",
        args: {
          hero_id,
        }
      }).then(res => {
        this.setData({
          heroRecentMatches: res
        })
      })
    } else if (cmd == "topPlayers") {
      app.openApiProxy({
        aName: "topPlayers",
        args: {
          hero_id
        }
      }).then(res => {
        console.log(res.rankings)
        this.setData({
          topPlayers: res.rankings
        })
      })
    }
  }
  
})