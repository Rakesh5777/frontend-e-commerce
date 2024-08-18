import { React, useState, useEffect } from 'react';
import Search from '../Search/search'
import { fetchProducts } from '../../api';
import Filter from '../Filter/filter';
import Cardcontainer from '../Card container/cardcontainer';
import './home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      const productList = await fetchProducts(query ? `?category=${query}` : '');
      setProducts(productList);
    };

    getProducts();
  }, [setQuery]);

  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
    setQuery(searchTerm);
  };
  return <>
    <div className="flex flex-row">
      <Search onSearch={handleSearch} />
      <Cardcontainer products={products}/>
    </div>
    {/* <div className="flex flex-row">
      <Nav />
    </div>
    <div className="flex flex-row">
      <div className="basis-2/5">
        <Filter />
      </div>
      <div className="basis-3/5">
        <Cardcontainer data={products} />
      </div>
    </div> */}
  </>
}

export default Home;
