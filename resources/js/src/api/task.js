/* eslint-disable camelcase */
import http from '@/utils/http'

export default {
  getTask: (miyao) => {
    return http.get('task', { miyao }, true)
  }
}
