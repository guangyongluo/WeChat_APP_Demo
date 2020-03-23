// pages/gym_index/gym_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图的URL数组
    imgUrls: [
      '../../images/ad1.jpg',
      '../../images/ad2.jpg',
      '../../images/ad3.jpg'
    ],
    //显示图片播放面板指示点
    indicatorDots: true,
    //自动播放
    autoplay: true,
    //自动播放切换时间
    interval: 3500,
    //滑动播放切换时间
    duration: 800,
    //时候循环播放
    circular: true,

    //地图经度
    longitude: 120.670808, 
    //地图纬度
    latitude: 31.315501,
    //地图标记点
    markers: [
      {
        longitude: 120.669665,
        latitude: 31.314814,
        name: '苏悦广场三楼',
        desc: '我现在的位置'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})