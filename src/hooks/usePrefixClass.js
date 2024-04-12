const namespace = 'vc'
export function usePrefixClass(name) {
  return {
    prefixCls: `${namespace}-${name}`
  }
}