import request from '@/utils/request'

// 测试9311地址
export function testData(data = {}) {
  return request({
    url: `/SmartMining/T1000/workbench`,
    method: 'post',
    data
  })
}