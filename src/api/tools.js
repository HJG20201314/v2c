/**
 * 设置domain为一级域名的cookie项
 * @param {*} name cookie项的key
 * @param {*} value cookie项的值
 * @param {} days 可选, 默认expires为''
 */
export function setCookieItem(name, value, days) {
  let domain, domainParts, date, expires, host
  if (days) {
    date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toGMTString()
  } else {
    expires = ''
  }
  host = location.host
  if (/^127.0.0.1(:\d+)?$/.test(host) || host.split('.').length === 1) {
    document.cookie = name + '=' + value + expires + '; path=/'
  } else {
    domainParts = host.split('.')
    domainParts.shift()
    domain = '.' + domainParts.join('.')
    document.cookie =
      name + '=' + value + expires + '; path=/; domain=' + domain
  }
}

/**
 * 获取cookie项的值
 * @param {*} name cookie项的key
 * @returns
 */
export function getCookieItem(name) {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length)
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length)
    }
  }
  return null
}