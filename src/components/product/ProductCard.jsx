import "./Product.scss"

const ProductCard = ({product}) => {
    const {price,title,image} = product
    console.log(price,title,image)
  return (
    <div className="card">
        <div className="price">
            <h3>{price}</h3>
        </div>
        <img src={image} alt="" />
        <div className="card-over">
            <h2>{title}</h2>
        </div>
    </div>
  )
}

export default ProductCard