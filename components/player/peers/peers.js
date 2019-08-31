// components/Player/Peers/Peers.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'apply-shared'
  },
  lifetimes: {
    attached() {
      //先去看看有没有英雄数据
      // if (!wx.getStorageSync('pHeroStats')) {
      //   //请求接口放到storage里
      //   app.openApiProxy({
      //     aName: "heroStats",
      //     args: {}
      //   }).then(res => {
      //     wx.setStorage({
      //       key: 'pHeroStats',
      //       data: res,
      //     })
      //   })
      // } else {
      //   //取出来
      //   //拿ID作为KEY保存
      //   //存到本地data中
      //   let heroStatsArr = wx.getStorageSync('pHeroStats')
      //   let heroStats = {}
      //   heroStatsArr.forEach(item => {
      //     heroStats[item.id] = item
      //   })
      //   this.setData({
      //     heroStats
      //   })
      // }
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  properties: {
    playersPeers:Object,
    playersPros:Object,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkData() {
      console.log("peer看到啦")
    }, 
    navigatePeer(e) {
      let account_id = this.data.playersPeers[e.currentTarget.dataset.index].account_id
      wx.navigateTo({
        url: `/pages/player/player?account_id=${account_id}`
      })
    },
    navigatePro(e) {
      let account_id = this.data.playersPros[e.currentTarget.dataset.index].account_id
      wx.navigateTo({
        url: `/pages/player/player?account_id=${account_id}`
      })
    }
  },
 
})
