import './items.css';

function Items({ product }) {
    return (
        <div className="item">
            <img src={product.image} alt={product.title} className='productImg' />
            <h2 className='productTitle'>{product.title}</h2>
            <p className='productPrice'>${product.price}</p>
            <div className='flex flex-row'>
            <button className='productButton basis-1/2'>Add to cart</button>
            <button claaaName = 'wishlistButton basis-1/2'>Add to Wishlist</button>
            </div>
            
        </div>
    );
}

export default Items;