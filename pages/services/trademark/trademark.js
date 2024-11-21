// pages/services/trademark/trademark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    services: [
      { title: '商标注册' },
      { title: '专利申请' },
      { title: '版权登记' }
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