import { IProduct } from '@/interfaces/product.interface'
import axios from 'axios'

export const ProductService = {
	async getAll() {
		const {data} = await axios.get<IProduct[]>('/products')
		return data
	},

	async getById(id: string) {
		const {data} = await axios.get<IProduct[]>('/products', {
			params: {
				id
			}
		})
		return data[0]
	}
}