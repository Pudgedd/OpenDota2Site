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
    itemDetail: Object
  },
  /**
   * 组件的初始数据
   */
  data: {

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
    openMatch(e){
      app.gotoMatch(e.currentTarget.dataset.matchid)
    }
  }
})