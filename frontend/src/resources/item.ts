import apiClient from '../lib/api-client'
import { Items, Item } from '../types'

export default {
  getItems: async (): Promise<Items> => await apiClient.get('/items'),
  getItem: async (id: number) => await apiClient.get(`/items/${id}`)
}
