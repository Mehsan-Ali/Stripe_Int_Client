import { create } from 'zustand'
import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

axios.defaults.withCredentials = true
export const useAuthStore = create(set => ({
    products: [],
    error: null,
    isLoading: false,

    fetchProducts: async () => {
        try {
            set({ isLoading: true })
            const response = await axios.get(`${API_URL}/products/get`)
            set({ products: response.data.products })
            console.log(response.data.products)
        } catch (error) {
            set({ error: error.message })
        }
    },
    checkoutPayment: async (data) => {
        try {
            set({ isLoading: true })
            const response = await axios.post(`${API_URL}/payments/checkout`, data)
            set({ products: response.data.products })
            console.log(response.data.products)
        } catch (error) {
            set({ error: error.message })
        }
    }
}))
