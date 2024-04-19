import { usePrefixClass } from '@/hooks/usePrefixClass'
import './index.scss'

export default {
  name: 'vcLayout',
  watch: {
    menuActive: {
      handler(val) {
        console.log('menuActive: ', val)
        this.$router.push({
          name: val
        })
      }
    }
  },
  computed: {
    menuActive: {
      get() {
        return this.$store.state.menu.menuActive
      },
      set(value) { 
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
      ]
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
        this.$store.dispatch('menu/SET_MENU_ACTIVE', key)
    },
    tabsChange(tabs) {
      this.menuOpens = [...tabs]
    }
  },
  render() {
    const { menuList } = this
    const { prefixCls } = usePrefixClass('layout')
    return (
      <div class={prefixCls}>
        <el-menu
          default-active={this.menuActive}
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          onSelect={this.handleSelect}>
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
        <div class={`${prefixCls}_main`}>
          <vcTab v-model={this.menuActive}
            list={this.menuOpens}
            tabProps={{ label: 'name', name: 'index' }}
            onTabsChange={this.tabsChange}></vcTab>
          <router-view/>
        </div>
      </div>
    )
  }
}