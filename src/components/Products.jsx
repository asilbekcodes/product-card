// import React from 'react'
import React, { useEffect, useState } from 'react'


const Products = ({addToCard}) => {
  const [data, setData] = useState([])
  const Product = 'https://dummyjson.com/products';
  useEffect(() => {
    async function getProducts() {
      const response = await fetch(Product)
      const data = await response.json()
      const products = data.products;
      // console.log(products[0].brand)
      setData(products)
    }
    getProducts()
  },[])

  return (
    <div className='container px-32 m-auto flex flex-wrap gap-4'>
      {
        data.map((product) => {
          return (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={product.thumbnail} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.category}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.title}</p>
                    <button onClick={() => addToCard (product)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add to Card
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products

