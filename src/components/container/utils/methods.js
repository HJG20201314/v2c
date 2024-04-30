export default {
  init() {
    this.questionTooltip = {
      ...this.questionTooltip,
      ...this.helpTip
    }
  },
  contentVisibleCtrl() {
    this.contentVisible = !this.contentVisible
  },
  isFullScreenCtrl() {
    this.isFullScreen = !this.isFullScreen
  }
}