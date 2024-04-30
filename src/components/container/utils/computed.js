import { isNumber } from "@/hooks/tools"

export default {
  headerHeight() {
    let titleHeight = this.titleHeight
    if (isNumber(titleHeight)) titleHeight += 'px'
    return titleHeight
  },
  calcHeight() {
    let height = '100%'
    if (!this.isFullScreen) {
      height = this.contentVisible ? this.height : this.titleHeight
      if (isNumber(height)) height += 'px'
    } else {
      height = `calc(100% - ${this.headerHeight})`
    }
    return height
  },
  calcWidth() {
    let width = '100%'
    if (this.isFullScreen) 
      width = `calc(100% - ${this.menuWith}px)`
    return width
  },
  headerOffset() {
    let offset = this.offset
    if (isNumber(offset)) offset += 'px'
    return offset
  },
  menuWith() {
    return this.isCollapse ? this.$store.state.menu.menuMinWidth : this.$store.state.menu.menuMaxWidth
  },
  isCollapse() {
    return this.$store.state.menu.isCollapse
  }
}