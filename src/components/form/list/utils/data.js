export default function () {
  return {
    filterText: null,
    worker: null,
    tableData: [],
    options: [],
    currentProps: {
      label: 'label',
      value: 'value',
      disabled: 'disabled'
    },
    checkboxConfig: {
      trigger: 'row',
      checkMethod: ({ row }) => {
        return !row?.disabled
      }
    },
    rowConfig: {
      keyField: 'select',
      height: 32,
      isHover: true
    },
  }
}