const app = getApp()
const {
  formatTime
} = require('../../utils/util.js')

Page({
  options: {
    addGlobalClass: true,
  },
  data: {
    TabCur:0,
    heroList: [],
    maxHeroList: [],
    maxItemList: [],
    skin: false
  },
  showHeros() {
    //先去看看有没有英雄数据
    if (!wx.getStorageSync('pHeroStats')) {
      //请求接口放到storage里
      app.openApiProxy({
        aName: "heroStats",
        args: {}
      }).then(res => {
        let heroStats = {}
        res.forEach(item => {
          heroStats[item.id] = item
        })
        wx.setStorage({
          key: 'pHeroStats',
          data: heroStats,
        })
        this.setData({
          heroList: heroStats
        })
      })
    } else {
      //取出来
      //拿ID作为KEY保存
      //存到本地data中
      let heroStatsArr = wx.getStorageSync('pHeroStats')
      this.setData({
        heroList: heroStatsArr
      })
    }
  },
  showMaxHeros() {
    //先去看看有没有英雄数据
    if (!wx.getStorageSync('pMaxHeroStats')) {
      //请求接口放到storage里
      app.openApiProxy({
        aName: "maxHeroStat",
        args: {}
      }).then(res => {
        let maxHeroStats = {}
        res.result.stat.forEach(item => {
          maxHeroStats[item.id] = item
        })
        wx.setStorage({
          key: 'pMaxHeroStats',
          data: maxHeroStats,
        })
        this.setData({
          maxHeroList: maxHeroStats
        })
      })
    } else {
      //取出来
      //拿ID作为KEY保存
      //存到本地data中
      let heroStatsArr = wx.getStorageSync('pMaxHeroStats')
      this.setData({
        maxHeroList: heroStatsArr
      })
    }
  },
  showMaxItems() {
    //先去看看有没有英雄数据
    if (!wx.getStorageSync('pMaxItemStats')) {
      //请求接口放到storage里
      app.openApiProxy({
        aName: "maxItemStat",
        args: {}
      }).then(res => {
        console.log(res)
        let maxItemStat = res.result.stat;
        wx.setStorage({
          key: 'pMaxItemStats',
          data: maxItemStat,
        })
        this.setData({
          maxItemList: maxItemStats
        })
      })
    } else {
      //取出来
      //拿ID作为KEY保存
      //存到本地data中
      let itemStatsArr = wx.getStorageSync('pMaxItemStats')
      console.log(itemStatsArr)
      this.setData({
        maxItemList: itemStatsArr
      })
    }
  },

  onShow() {
    this.showHeros();
    this.showMaxHeros();
    this.showMaxItems();
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
    // let hero_index = e.currentTarget.dataset.index
    let hero_id = this.data.heroList[e.currentTarget.dataset.index].id
    wx.navigateTo({
      url: `/pages/heroStatus/heroStatus?hero_id=${hero_id}`
    })
  },
  navigateToItem(e){
    let item_name = this.data.maxItemList[e.currentTarget.dataset.index].img_name
    wx.navigateTo({
      url: `/pages/itemStatus/itemStatus?item_name=${item_name}`
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
  change(e) {
    this.setData({
      TabCur: e.detail.current
    })
    // this.callComponent()
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  }
})