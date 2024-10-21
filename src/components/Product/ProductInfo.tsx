export interface ProductProps {
    name: string
    price: number | string
    quantity?: number
}

const ProductInfo = (props : ProductProps) => {
  return (
    <div className="flex justify-between px-2">
      <h1>{props.name}</h1>
      <div>
      {props.quantity ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>}
      <p>{props.price}</p>
      </div>
    </div>
  )
}

export default ProductInfo