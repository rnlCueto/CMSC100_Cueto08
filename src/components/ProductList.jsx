import ProductCard from './ProductCard'

// contains all the product cards side by side
function ProductList(props) {
  return (
    <main className="product-list">
      {
        // map takes a callback function that executes 
        // for each item in the list, then returns a list of values
        props.products.map((product) => {
        // each product has an image, name, and add-to-cart btn
            return <ProductCard key={product.id} name={product.name} picture={product.picture} />
        })
      }
    </main>
  )
}

export default ProductList