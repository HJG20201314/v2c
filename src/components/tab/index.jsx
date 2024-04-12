import draggable from "vuedraggable"
import { usePrefixClass } from '@/hooks/usePrefixClass'
import { Scrollbar } from 'element-ui'
import utils from './utils'
import'./index.scss'

export default {
  name: 'vcTab',
  model: {
    prop: 'value',
    event: 'update'
  },
  ...utils,
  render() {
    const { prefixCls } = usePrefixClass('tab')
    const defaultSlot = this.$scopedSlots.default
    const {
      height,
      tabs,
      dragable,
      tabProps,
      maxTabWidth,
      closeable
    } = this

    // const cloumnSlot = {
    //   default: ({ row }) => {
    //     return (<div>{ row }</div>)
    //   }
    // }
    return (
      <div ref="tab" class={prefixCls} style={`height: ${typeof height === 'string' && height.endsWith('px') ? height : height + 'px'}`}>
        <Scrollbar ref="scrollbar" class={`${prefixCls}_scroll`} nativeOnWheel={this.handleWheel}>
          <div class={`${prefixCls}_main ${prefixCls}_main-${this.type}`}>
              <draggable class={`${prefixCls}_main-drag`} v-model={this.tabs} animation="300" disabled={!dragable} onUpdaue={this.tabsChange}>
              {tabs.map(item =>
                <li class={ ` ${this.value === item[tabProps.name] ? `${prefixCls}_main-${this.type}-is-active` : ''}` }
                  style={`max-width: ${typeof maxTabWidth === 'string' && maxTabWidth.endsWith('px') ? maxTabWidth : maxTabWidth + 'px'}`}
                  key={item[tabProps.name]}
                  onMouseover={this.handleTabItemMouse}
                  onClick={() => this.handleCheck(item)}>
                  {defaultSlot ? (
                    defaultSlot({...item})
                  ) : (<div class={`${prefixCls}_main-label`} style={`line-height: ${typeof height === 'string' && height.endsWith('px') ? height : height + 'px'}`}>{item[tabProps.label]}</div>)}
                  {(closeable && tabs.length > this.minLimit) && <i class="el-icon-close" onClick={() => this.handleClose(item)}></i>}
                </li>
              )}
            </draggable>
          </div>
        </Scrollbar>
        <el-popover
          width="200"
          placement="bottom"
          trigger="click"
          popper-class={`${prefixCls}_main-popover`}>
          <vcList
            list={tabs}
            defineProps={{
              label: 'label',
              value: 'name',
            }}>
            <span slot="default">12312</span>
          </vcList>
          <template slot="reference">
            <svg t="1712741291412" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21598" width="16" height="16"><path d="M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m0 76.8a435.2 435.2 0 1 0 0 870.4A435.2 435.2 0 0 0 512 76.8z m234.112 317.44a38.4 38.4 0 0 1 6.272 48.832l-4.224 5.44-208 224a38.4 38.4 0 0 1-51.456 4.48l-4.864-4.48-208-224a38.4 38.4 0 0 1 51.2-56.896l5.12 4.672L512 589.952l179.84-193.664a38.4 38.4 0 0 1 54.272-2.048z" p-id="21599"></path></svg>
          </template>
        </el-popover>
      </div>
    )
  }
}