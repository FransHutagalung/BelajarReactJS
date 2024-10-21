import ProductInfo, { ProductProps } from './ProductInfo'

 export const Index = () => {

   const products : ProductProps[] = [
      {
         name: "Rice",
         price: "Rp.21,000",
      },
      {
         name: "Powder",
         price: "Rp.20,000",
      },
      {
         name: "Oat",
         price: "Rp.25,000",
         quantity: 2
      }
   ]

  return (
    <div className='bg-yellow-300 min-w-32 max-w-[400px] ms-4'>
        {products.map((product) => (
                <ProductInfo
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                />
           
        ))}
    </div>
  )
}

