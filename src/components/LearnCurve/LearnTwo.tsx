import { useEffect, useState } from "react"

interface product{
    id : number ,
    kodeProduct : string 
    title : string 
    type : string 
    stock : number 
    status : string 
    tag : Array<string>
    brand : string,
    description : string
    price : number 
}

const LearnTwo = () => {
  const [products , setProducts] = useState<product[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
        const fetchProduccts = async () => {
          try{
             setLoading(true)
             const response = await fetch('http://localhost:3000/api/product/listProduct')
             if(!response.ok){
                throw new Error(response.statusText)
             }
             const dataProducts : {
                data : Array<product>
                count : number
            } = await response.json()
             const products = dataProducts.data
             setProducts(products)
          } catch(error : any){
              setError(error.message)
          }  finally{
              setLoading(false)
          }
        }
        fetchProduccts()
  } , [])
 
  if(loading){
    return <div>Loading</div>
  }

  if(error){
    return <div>{error}</div>
  }

  return (
    <div>
        <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LearnTwo