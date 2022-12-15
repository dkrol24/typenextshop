import { Tab } from "@headlessui/react";
import type { GetServerSideProps } from "next";
import Head from 'next/head'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Product from "../components/Product";
import { fetchCategories } from './utils/fetchCategories';
import { fetchProducts } from './utils/fetchProducts';

interface Props {
  categories: Category[];
  products: Product[];
}


const Home = ({ categories, products }: Props) => {
  console.log(products);

  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => <Product product={product} key={product._id} />); // filter products by category
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>
    <main style={{position:'relative',height:'200vh', background:'#ffe9e9'}}>
      <Landing/>
    </main>
    <section style={{position:'relative',zIndex:'40',minHeight:'100vh',background:'red'}}>
      <div>
      <h1>New Promos</h1>
      <Tab.Group>
             <Tab.List className="flex justify-center">
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                      selected
                        ? "borderGradient bg-[#35383C] text-white"
                        : "border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List> 
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
      </div>
    </section>
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts();

  return{
    props:{
      categories,
      products,
    },
  }
}