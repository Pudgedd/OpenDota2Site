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
    hero: Object,
    heroDetail: Object,
    maxHeroDetail: Object,
    heroRecentMatches: Object
  },
  /**
   * 组件的初始数据
   */
  data: {
    downList: true,
    downDesc:false
  },
  lifetimes: {
    attached() {
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
    },
    showDesc(){
      this.setData({
        downDesc: !this.data.downDesc
      })
    }
  }
})