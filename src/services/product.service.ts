import { instance } from "@/lib/api";
import { IProduct } from "@/types/product.interface";

export const ProductService = {
  async getAll() {
    const { data } = await instance.get<IProduct[]>("/products");
    return data;
  },

  async getById(id: string) {
    const { data } = await instance.get<IProduct[]>("/products", {
      params: {
        id,
      },
    });
    return data[0];
  },
};
