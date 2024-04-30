export default {
  value: {
    type: String,
    default: ''
  },
  cmOptions: {
    type: Object,
    default: () => {
      return {}
    }
  }
}