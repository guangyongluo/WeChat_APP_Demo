//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    users: [
        {
            name: '张三',
            age: 20
        },
        {
            name: '李四',
            age: 26
        },
        {
            name: '王五',
            age: 28
        }
    ]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }

  
})
