import { usePrefixClass } from '@/hooks/usePrefixClass'
import './index.scss'

export default {
  name: 'vcLayout',
  watch: {
    menuActive: {
      handler(val) {
        console.log('menuActive: ', val)
        // this.$router.push({
        //   name: val
        // })
      }
    }
  },
  computed: {
    menuActive: {
      get() {
        return this.$store.state.menu.menuActive
      },
      set(value) { 
        this.$router.push({
          name: value
        })
        this.$store.dispatch('menu/SET_MENU_ACTIVE', value)
      }
    },
    menuOpens: {
      get() {
        return this.$store.state.menu.menuOpens
      },
      set(value) {
        this.$store.dispatch('menu/SET_MENU_OPENS', value)
      }
    },
    menuMinWidth() {
      return this.$store.state.menu.menuMinWidth + 'px'
    },
    menuMaxWidth() {
      return this.$store.state.menu.menuMaxWidth + 'px'
    },
    isCollapse: {
      get() {
        return this.$store.state.menu.isCollapse
      },
      set(value) {
        this.$store.dispatch('menu/SET_MENU_ISCOllAPSE', value)
      }
    }
  },
  data() {
    return {
      menuList: [
        {
          name: '表单',
          index: 'form',
          children: [
            {
              name: '筛选',
              index: 'formFilter'
            }
          ],
        },
        {
          name: 'Tab',
          index: 'tab'
        },
        {
          name: '容器',
          index: 'container'
        },
        {
          name: 'Code',
          index: 'code'
        }
      ],
    }
  },
  methods: {
    findMenu(path) {
      let list = this.menuList
      let tag = null
      path.forEach((p, index) => {
        tag = list.find(item => item.index === p)
        if (index < path.length - 1) 
          list = tag.children
      })
      return tag
    },
    handleSelect(key, keyPath) {
      let menu = this.findMenu(keyPath)
      if (!this.menuOpens.find(item => item.index === menu.index)) 
        this.menuOpens.push(menu)
      if (key !== this.menuActive)
        this.menuActive = key
      
    },
    tabsChange(tabs) {
      this.menuOpens = [...tabs]
    },
    isCollapseCtrl() {
      this.isCollapse = !this.isCollapse
    }
  },
  render() {
    const { menuActive, menuList, isCollapse, menuOpens, menuMinWidth, menuMaxWidth, isCollapseCtrl, handleSelect, tabsChange } = this
    const { prefixCls } = usePrefixClass('layout')
    return (
      <div class={prefixCls}>
        <div class={`${prefixCls}_menu`} style={`min-width: ${menuMinWidth};max-width: ${menuMaxWidth}`}>
          <el-menu
            default-active={menuActive}
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            collapse={isCollapse}
            onSelect={handleSelect}>
            {menuList.map(item => 
              { return item?.children?.length ? (
                <el-submenu index={item.index}>
                  <template slot='title'>{item.name}</template>
                  {item.children.map(child => (
                    <el-menu-item index={child.index}>{child.name}</el-menu-item>
                  ))}
                </el-submenu>
              ) : (
                <el-menu-item index={item.index}>{item.name}</el-menu-item>
              )}
            )}
          </el-menu>
          <div class={`${prefixCls}_menu-collapse`}>
            <svg t="1714290744141" class="icon" viewBox="0 0 1194 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21325" width="16" height="16" onClick={isCollapseCtrl}>
              {!isCollapse ? <path d="M0 938.666667v85.333333h1193.813333v-85.333333H0z m1194.666667-640L938.666667 512l256 213.333333v-426.666666zM0 625.749333v85.333334h768v-85.333334H0z m0-312.832v85.333334h768v-85.333334H0zM0 0v85.333333h1193.813333V0H0z" fill="#ffffff" p-id="21326"></path>
                : <path d="M0 938.666667v85.333333h1193.813333v-85.333333H0z m938.666667-640v426.666666L1194.666667 512l-256-213.333333zM0 625.749333v85.333334h768v-85.333334H0z m0-312.832v85.333334h768v-85.333334H0zM0 0v85.333333h1193.813333V0H0z" fill="#ffffff" p-id="21543"></path>
              }
            </svg>
          </div>
        </div>
        <div class={`${prefixCls}_main`}>
          <vcTab v-model={this.menuActive}
            list={menuOpens}
            tabProps={{ label: 'name', name: 'index' }}
            onTabsChange={tabsChange}></vcTab>
          <div class={`${prefixCls}_main-content`}>
            <router-view/>
          </div>
        </div>
      </div>
    )
  }
}