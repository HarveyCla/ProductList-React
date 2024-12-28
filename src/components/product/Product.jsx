import ProductCard from "./ProductCard"

const ProductList = ({products}) => {

    console.log(products[0])
    return(
        <div className="products-list">
            {products.map((product)=> ( <ProductCard key={product.id} product={product} /> ) )}
        </div>
    )
}

export default ProductList
  

