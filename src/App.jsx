import React from 'react'
import './App.css'
import StoreHeader from './components/StoreHeader'
import ProductList from './components/ProductList'

// the navigation buttons at the top right of the page
const navigationButtons = [
  { name: 'Appliances', url: '#', icon: 'images/nav-icon.svg', id: 1 },
  { name: 'Groceries',  url: '#', icon: 'images/nav-icon.svg', id: 2 },
  { name: 'Gadgets',    url: '#', icon: 'images/nav-icon.svg', id: 3 },
  { name: 'Clothing',   url: '#', icon: 'images/nav-icon.svg', id: 4 },
]

// the products shown on the page
const products = [
  { name: 'Asahy Power Juicer',        picture: 'images/product-picture.svg', id: 1 },
  { name: 'Samsong Washing Machine',   picture: 'images/product-picture.svg', id: 2 },
  { name: 'Hanabesh Electric Fan',     picture: 'images/product-picture.svg', id: 3 },
  { name: 'Tosheba Rice Cooker',       picture: 'images/product-picture.svg', id: 4 },
  { name: 'Philipz Air Fryer',         picture: 'images/product-picture.svg', id: 5 },
  { name: 'Sharpp Microwave Oven',     picture: 'images/product-picture.svg', id: 6 },
  { name: 'Hitachu Refrigerator',      picture: 'images/product-picture.svg', id: 7 },
  { name: 'Panasonyk Electric Kettle', picture: 'images/product-picture.svg', id: 8 },
]

function App() {
  return (
    <div>
      <StoreHeader buttons={navigationButtons} />
      <ProductList products={products} />
    </div>
  )
}

export default App