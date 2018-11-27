//logs.js
Page({
  data: {
    value: ''
  },
  handleChange: function(event) {
    let value = event.detail.value;
    console.log(value);
    this.setData({ value })
  },
  handleSubmit: function() {
    let value = this.data.value;
    if(!value){
      wx.showToast({
        icon: 'none',
        title: '请输入快递号'
      })
    }else{
      let url = `/pages/index/index?order_id=${value}`;
      wx.navigateTo({ url });
    }
  },
  handleScancode: function() {
    wx.scanCode({
      success (res) {
        let order_id = res.result.trim();
        let url = `/pages/index/index?order_id=${order_id}`;
        wx.navigateTo({ url });
      }
    })
  }
})
