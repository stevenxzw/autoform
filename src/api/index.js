import * as http from '@/http'
// import { API_SERVER } from 'consts/config'

var API_SERVER = 'http://localhost:8881',
    Fake_SERVER = 'http://dev.fake.gaofen.com'

export default {

  /**
   * 登录接口
   * @param  {Object} params 登录信息
   * @return {Promise}
   */

  login (params) {
    return http.post(
      `${API_SERVER}/login`, params
    )
  },
  music (params) {
    return http.post(
      `${Fake_SERVER}/huodong/weixin_zhongkao_index/home`, params
    )
  },
}