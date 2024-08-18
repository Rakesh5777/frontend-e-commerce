import './cardcontainer.css';
import Items from '../Items/items';
function Cardcontainer({products}) {
    return (
        <div className="cardcontainer">
            {products.map(product => (
                <Items key={product.id} product={product} />
            ))}
        </div>
    );
}
export default Cardcontainer;