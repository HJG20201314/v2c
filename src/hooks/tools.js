
/**
 * 渲染插槽工具方法
 * @param {*} $slots 具名插槽
 * @param {*} $scopedSlots 具名插槽，允许传递数据
 * @returns 
 */
export const renderSlots = ($slots, $scopedSlots) => {
  const slots = Object.keys($slots)
  const scopedSlots = Object.keys($scopedSlots)
  return slots.map(slotName => {
    {!scopedSlots.includes(slotName) && (
      <template slot={slotName}>
        {$slots[slotName]}
      </template>
    )}}).concat(
    scopedSlots.map(slotName => {
      const scope = {}
      return (
        <template slot={slotName} slot-scope={scope}>
          {$scopedSlots[slotName](scope)}
        </template>
      )
  }))       
}