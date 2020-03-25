// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js'); 

// pages/bmap_index/bmap_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //当前城市
    myCity: "",
    //实时温度
    realTimeTemperature: "",
    //天气详情
    myWeatherDesc: "",
    //PM 2.5
    myPM25Str: "",

    moreWeather: null,

    tips: null,

    cityList: [
      '北京市',
      '苏州市',
      '荆州市',
      '上海市',
      '广州市',
      '深圳市'
    ]
  },

  selectorChange: function(e){
    this.baidu(e.detail.value);
  },

  onLoad: function(options){
    this.baidu();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  baidu: function (cityListIndex) {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'N1qaAE34fA3bZbf76oeVKINQyM5XuHhS'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var current = data.currentWeather[0];
      
      //切割current.date字符串
      var dateArray = current.date.split(' ');
       
      //星期
      var myWeek = dateArray[0];
      //日期
      var myDate = dateArray[1];
      //当前实时温度
      var temperatureValue = dateArray[2].split('：')[1];
      // console.log(temperatureValue);
      var realTimeTemperature = dateArray[2].split('：')[1].substring(0, (temperatureValue.length - 1));

      //PM2.5以及污染指数
      var myPM25 = current.pm25;
      var myPM25Str = "";

      if(myPM25 <= 50){
        myPM25Str = "优 " + myPM25;
      }else if(myPM25 <=100){
        myPM25Str = "良 " + myPM25;
      }else if(myPM25 <= 150){
        myPM25Str = "轻度污染 " + myPM25;
      }else if(myPM25 <= 200){
        myPM25Str = "中度污染 " + myPM25;
      }else if(myPM25 <= 300){
        myPM25Str = "重度污染 " + myPM25;
      }else{
        myPM25Str = "严重污染 " + myPM25;
      }


      //获取更多的天气数据
      var original =data.originalData.results[0];

      //获取四天的天气数据
      var moreWeather = original.weather_data;
      moreWeather[0].date = '今天';

      //获取五条生活小贴士
      var tips = original.index;

      console.log(tips);
      that.setData({
        myCity: that.data.cityList[cityListIndex] || current.currentCity,
        realTimeTemperature: realTimeTemperature,
        myWeatherDesc: current.weatherDesc,
        myPM25Str: myPM25Str,
        moreWeather: moreWeather,
        tips: tips
      });
    }
    // 发起weather请求 
    BMap.weather({
      //发送要查询的城市
      location: that.data.cityList[cityListIndex],
      fail: fail,
      success: success
    }); 
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