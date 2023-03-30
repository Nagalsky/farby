import Home from "@/components/screens/home/Home";
import { ProductService } from "@/services/product.service";
import { IProductData } from "@/types/product.interface";
import { GetStaticProps, NextPage } from "next";

const HomePage: NextPage<IProductData> = ({ products }) => {
  return <Home />;
};

export const getStaticProps: GetStaticProps<IProductData> = async () => {
  const products = await ProductService.getAll();

  return {
    props: { products },
  };
};

export default HomePage;
