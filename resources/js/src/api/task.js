/* eslint-disable camelcase */
import http from '@/utils/http'

export default {
  getTask: () => {
    return http.get('task', {}, true)
  }
}
