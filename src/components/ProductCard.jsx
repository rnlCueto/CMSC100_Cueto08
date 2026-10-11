// every product added to the cart is saved in this list
const cartItems = []

// one product card: picture, name, and an "Add to cart" button
function ProductCard(props) {
  // runs when "Add to cart" is clicked
  const addToCart = () => {
    cartItems.push(props.name)
    console.log(`Added ${props.name} to the cart!`)
  }

  return (
    <div className="product-card">
      <img className="product-picture" src={props.picture} alt={props.name} />
      <p className="product-name">{props.name}</p>
      <button className="add-to-cart" onClick={addToCart}>
        <img className="cart-icon" src="images/cart-icon.svg" alt="" />
        Add to cart
      </button>
    </div>
  )
}

export default ProductCard