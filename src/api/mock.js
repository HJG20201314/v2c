import Mock from "mockjs";

const getMockData =  (data) => {
  return {
    code: 0,
    msg: 'OK',
    data: data
  }
}

export const initMock = () => {
  Mock.mock('/vc/tab/demo1', 'post', getMockData({
    'list|10': [
      {
        label: '@ctitle(3,10)',
        name: '@last'
      }
    ]
  }))
}

Mock.setup({
  timeout: 0
})