import Header from '../Header/header'
import Filter from '../Filter/filter' 
import Cardcontainer from '../Card container/cardcontainer'
import {React, useState, useEffect} from 'react'
function Home(){

    const [loading, setLoading] = useState(true);
const [products, setProducts] = useState([]);

useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        setProducts(json);
        setLoading(false);
        console.log(products)
    })
   
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setLoading(false);
    });
}, []);

if (loading) return <p>Loading...</p>;

return(
    <>
    <div className="flex flex-row">
    <div>
      <Header />
    </div>
  </div>
  <div className="rflex flex-rowow">
    <div className="basis-2/5">
      <Filter />
    </div>
    <div className="basis-3/5	">
      <Cardcontainer data={products} />
    </div>
  </div>
  </>
)

}
export default Home