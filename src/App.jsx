// import the styling
import './App.css'

// tag names
import StoreHeader from './components/StoreHeader'
import ProductList from './components/ProductList'

// the navigation buttons at the top right of the page
// array of objects w/ each key serving as attribute later on
const navigationButtons = [
  { name: 'Appliances', url: '#', icon: 'src/images/appliance-icon.png', id: 1 },
  { name: 'Groceries',  url: '#', icon: 'src/images/grocery-icon.png', id: 2 },
  { name: 'Gadgets',    url: '#', icon: 'src/images/gadgets-icon.png', id: 3 },
  { name: 'Clothing',   url: '#', icon: 'src/images/clothes-icon.png', id: 4 },
]

// the products shown on the page
// array of objects w/ each key serving as attribute later on
const products = [
  { name: 'Asahy Power Juicer',        picture: 'src/images/barbie-juicer.jpg', id: 1 },
  { name: 'Samsong Washing Machine',   picture: 'src/images/barbie-washingMachine.jpg', id: 2 },
  { name: 'Hanabesh Electric Promo',   picture: 'src/images/barbie-electricSet.jpg', id: 3 },
  { name: 'Tosheba Rice Cooker',       picture: 'src/images/barbie-riceCooker.jpg', id: 4 },
  { name: 'Philipz Yogurt Maker',      picture: 'src/images/barbie-yogurtMaker.jpg', id: 5 },
  { name: 'Sharpp Shoe-Vacuum',        picture: 'src/images/barbie-shoeVacuum.jpg', id: 6 },
  { name: 'Hitachu Refrigerator',      picture: 'src/images/barbie-fridge.jpg', id: 7 },
  { name: 'Panasonyk Electric Kettle', picture: 'src/images/barbie-eKettle.jpg', id: 8 },
]

// replace the contents of the App class’s return statement in a div
function App() {
  return (
    <div>
      <StoreHeader buttons={navigationButtons} />
      <ProductList products={products} />
    </div>
  )
}

export default App

// Image Sources:
  // https://i.ebayimg.com/images/g/BHYAAOSwph1lU~H7/s-l1200.jpg
  // https://i.ebayimg.com/images/g/6WQAAeSw8SFpflCD/s-l1200.jpg
  // https://m.media-amazon.com/images/I/715Stg9zEYL._AC_UF1000,1000_QL80_.jpg
  // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixchE1aTGAlIUfGIS2rdrbDlFmusIsAE7I7tFEre2Hgdo5UzMeZL6C7c&s=10
  // https://en.barbiepedia.com/img/barbie/800/CFB49_9.jpg
  // https://i.ytimg.com/vi/NuKa1Dz_KCY/maxresdefault.jpg
  // https://i.pinimg.com/736x/47/65/c4/4765c4484bf20053b828d356223a023d.jpg
  // https://owp.klarna.com/product/3169428743/Barbie-Barbie-Kitchen-Kettle-Roleplay-Toy.jpg
// Icons are from Canva