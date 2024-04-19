export default {
  currentValue: {
    get() {
      return this.value
    },
    set(value) {
      this.$emit('update', value)
    }
  }
}