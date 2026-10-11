import ProductCard from './ProductCard'

// the body of the page: all the product cards side by side
function ProductList(props) {
  return (
    <main className="product-list">
      {
        props.products.map((product) => {
          return <ProductCard key={product.id} name={product.name} picture={product.picture} />
        })
      }
    </main>
  )
}

export default ProductList