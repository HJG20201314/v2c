// import { demo1 } from "./config"
export default {
  name: 'vcTabViewDemo1',
  data() {
    return {
      list: [],
      activeTab: null
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      await this.$http.post('/tab/demo1', { test: '123' }).then(res => {
        console.log('res: ', res)
        this.list = res?.data?.list?.map((item, index) => {
          item.name += index
          return item
        })
        this.activeTab = this.list[0]?.name
      })
    }
  },
  render() {

    return (
      <vc-container title="Demo1 基本功能">
        <div slot="content">
          <vc-tab v-model={this.activeTab} list={this.list}></vc-tab>
          {/* <vc-code value={demo1}></vc-code>             */}
        </div>
      </vc-container>
    )
  }
}