import apiClient from '../lib/api-client'
import { Categories } from '../types'

export default {
  getCategories: async (): Promise<Categories> => await apiClient.get('/categories')
}
