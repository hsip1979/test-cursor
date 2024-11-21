// pages/services/legal/legal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    services: [
      { title: '法律咨询' },
      { title: '合同审查' },
      { title: '法律文书' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  onServiceTap(e) {
    const index = e.currentTarget.dataset.index;
    const service = this.data.services[index];
    wx.showToast({
      title: `选择了${service.title}`,
      icon: 'none'
    });
  }
})