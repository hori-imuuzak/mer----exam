import axios from 'axios'
import querystring from 'querystring'

// TODO 本当は環境変数にする
const API_URL = 'http://docker.for.mac.localhost:5000'

export default {
  get: async (path: string, args?: Object): Promise<any> => {
    const query = querystring.stringify(args)
    const result = await axios.get(`${API_URL}${path}${query ? `?${query}` : ''}`)
    return result.data
  }
}
