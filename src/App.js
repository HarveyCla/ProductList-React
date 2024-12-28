import "./App.scss";
import Header from "./components/header/Header";
import ProductList from "./components/product/Product";

import {products, categories} from "./helper/data"


function App() {

  // console.log(products, categories)
  return (
    <div className="App">
      <Header categories={categories} title="Product List"/>
      <ProductList products={products}/>
    </div>
  );
}

export default App;
