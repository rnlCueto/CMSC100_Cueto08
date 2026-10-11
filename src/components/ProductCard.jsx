// every product added to the cart is saved in this list
const cartItems = []

// each product card has a picture, name, and an "Add to cart" button
function ProductCard(props) {
    // runs when "Add to cart" is clicked
    const addToCart = () => {
        // push product name
        cartItems.push(props.name)
        // print successful push in console
        console.log(`Added ${props.name} to the cart!`)
        // alert the user as well just in case
        alert('\t'+ props.name + ' has been added to the cart!\nCheck the console.')
    }

    return (
        // return a product-card
        <div className="product-card">
            <img className="product-picture" src={props.picture} alt={props.name} />
            <p className="product-name">{props.name}</p>

            {/* triggers when clicked */}
            <button className="add-to-cart" onClick={addToCart}>
                <img className="cart-icon" src="src/images/cart-icon.png" alt="" />
                Add to cart
            </button>
        </div>
    )
}

export default ProductCard