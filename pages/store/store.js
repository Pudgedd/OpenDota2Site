const app = getApp()
const {
  formatTime
} = require('../../utils/util.js')

Page({
  options: {
    addGlobalClass: true,
  },
  data: {
    page: 1,
    multiIndex: [0, 0],
    multiArray: [
      ['英雄', '类型'],
      ['0', '1', '2', '3', '4']
    ],
    storeList: [],
    optionList: [],
    heroes: []
  },

  showStores() {
    //提示加载中
    wx.showLoading({
      title: '加载中',
    })

    //请求接口放到storage里
    app.openApiProxy({
      aName: "stores",
      args: {
        "page": this.data.page
      }
    }).then(res => {
      var arr1 = this.data.storeList; //从data获取当前datalist数组
      var arr2 = res.data.list; //从此次请求返回的数据中获取新数组
      arr1 = arr1.concat(arr2); //合并数组
      this.setData({
        storeList: arr1
      })
      wx.hideLoading();
    })
  },

  showOptions() {
    //提示加载中
    wx.showLoading({
      title: '加载中',
    })

    //请求接口放到storage里
    app.openApiProxy({
      aName: "options",
      args: {}
    }).then(res => {
      let heroArr = res.data.list[5];
      let arrStr = heroArr.list[0].list;
      let arrAgi = heroArr.list[1].list;
      let arrInt = heroArr.list[2].list;
      arrStr = arrStr.concat(arrAgi);
      arrStr = arrStr.concat(arrInt);

      this.setData({
        optionList: res.data,
        heroes:arrStr
      })
      wx.hideLoading();
    })
  },

  onShow() {
    this.showStores();
    //this.showOptions();
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
  gridchange: function(e) {
    this.setData({
      gridCol: e.detail.value
    });
  },
  gridswitch: function(e) {
    this.setData({
      gridBorder: e.detail.value
    });
  },
  menuBorder: function(e) {
    this.setData({
      menuBorder: e.detail.value
    });
  },
  menuArrow: function(e) {
    this.setData({
      menuArrow: e.detail.value
    });
  },
  menuCard: function(e) {
    this.setData({
      menuCard: e.detail.value
    });
  },
  switchSex: function(e) {
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
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  onShareAppMessage() {},

  onReachBottom: function() { //触底开始下一页
    var that = this;
    var page = that.data.page + 1; //获取当前页数并+1
    that.setData({
      page: page, //更新当前页数
    })
    that.showStores(); //重新调用请求获取下一页数据
  },

  MultiChange(e) {
    console.log(e)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  MultiColumnChange(e) {
    let data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = this.data.heroes;
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            break;
        }
        data.multiIndex[1] = 0;
        break;
      case 1:
        break;
    }
    this.setData(data);
  },
})