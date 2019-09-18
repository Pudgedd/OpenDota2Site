// components/Player/RecentMatches/RecentMatches.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    player: Object,
    playersWl: Object,
    playersTotalsAll: Array,
    playersRecentMatches: Object,
    heroList: Object
  },
  /**
   * 组件的初始数据
   */
  data: {
    downList: false
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
      //     console.log(res)
      //     let heroStats = {}
      //     res.forEach(item => {
      //       heroStats[item.id] = item
      //     })
      //     wx.setStorage({
      //       key: 'pHeroStats',
      //       data: heroStats,
      //     })
      //   })
      // } else {
      //   //取出来
      //   //拿ID作为KEY保存
      //   //存到本地data中
      //   let heroStatsArr = wx.getStorageSync('pHeroStats')
      //   this.setData({
      //     heroStatsArr
      //   })
      // }
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    clk() {
      this.setData({
        downList: !this.data.downList
      })
    },
    openMatch(e){
      app.gotoMatch(e.currentTarget.dataset.matchid)
    }
  }
})