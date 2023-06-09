export interface IProduct {
	id: number
	price: number
	title: string
	image: string
}

export interface IProductData {
	products: IProduct[]
}