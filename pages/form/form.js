const date = new Date();
const years = [];
const months = [];
const days = [];

for(let i = 1990; i <= date.getFullYear(); i++){
  years.push(i);
}

for(let i = 1; i <= 12; i++){
  months.push(i);
}

for(let i = 1; i <= 31; i++){
  days.push(i);
}


// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'FRA', value: '法国' },
    ],
    state: [
      {
        name: '中国',
        value: '中国'
      },
      {
        name: '日本',
        value: '日本'
      },
      {
        name: '韩国',
        value: '韩国'
      },
      {
        name: '泰国',
        value: '泰国',
        checked: true
      },
      {
        name: '越南',
        value: '越南'
      }
    ],
    list: [
      '北京',
      '上海',
      '南京',
      '广州',
      '深圳'
    ],
    objs: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '英国'
      },
      {
        id: 3,
        name: '法国'
      },
      {
        id: 4,
        name: '德国'
      },
    ],
    multiList: [
      ['马云', '马化腾'],
      ['李宁','姚明','刘翔'],
      ['周杰伦','王力宏','陶喆']
    ],
    index: 0,
    multiIndex: [0, 0, 0],
    multiObjs: [
      [
        {
          id: 0,
          name: '马云'
        },
        {
          id: 1,
          name: '马化腾'
        }
      ],
      [
        {
          id: 0,
          name: '李宁'
        },
        {
          id: 1,
          name: '姚明'
        },
        {
          id: 2,
          name: '刘翔'
        }
      ],
      [
        {
          id: 0,
          name: '周杰伦'
        },
        {
          id: 1,
          name: '王力宏'
        },
        {
          id: 2,
          name: '陶喆'
        }
      ]
    ],
    startTime: '00:00',
    endTime: '24:00',
    selectTime: '11:30',

    startDate: '2020-01-01',
    endDate: '2020-12-31',
    selectDate: '2020-03-20',

    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',

    years: years,
    months: months,
    days: days,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    value: [9999, 6, 15],
    dataTitle: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      dataTitle: options.title
    })
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

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  myButton: function(e){
    console.log(e);
  },

  change: function(e){
    this.setData({
      index: e.detail.value
    })
  },

  multiChange: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },

  columnChange: function(e){
    console.log(e);
  },

  changeTime: function(e){
    this.setData({
      selectTime: e.detail.value
    })
  },

  changeDate: function (e) {
    this.setData({
      selectDate: e.detail.value
    })
  },

  changeRegion: function(e){
    this.setData({
      region: e.detail.value
    })
  },

  changeView: function(e){
    const val = e.detail.value;
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  }
})